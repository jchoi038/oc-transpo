const lang = checkPageLanguage(window.location.href);

// Initialize variables for station listing components
const selectOptions = document.getElementsByTagName("select");
const searchInputs = document.getElementsByTagName("input");
const selects = document.getElementsByTagName("select");
const lineRoutings_all = document.querySelectorAll(".line-routing");

function checkPageLanguage(currentUrl) {
	if (currentUrl.indexOf("/fr/") == -1) {
		return "en";
	} else {
		return "fr";
	}
}



/******** Part Station listing compoentns: auto generating list of stations */
// Helper function to create line icon elements
const createLineIcon = (lineNumber, lang) => {
	const line = document.createElement("span");
	line.className = `icon rt rt-type--line${lineNumber}`;
	line.innerHTML =
		lang === "en"
			? `<span class="visuallyhidden">Line </span>${lineNumber}`
			: `<span class="visuallyhidden">Ligne </span>${lineNumber}`;
	return line;
};

// Helper function to create transport icons (train/bus)
const createIconElement = (iconName, altText) => {
	span = document.createElement("span");
	span.className = "flex flex-ai-c";
	const icon = document.createElement("img");
	icon.className = "inline-icon";
	icon.alt = altText;
	icon.src = `https://www.octranspo.com/images/files/icons/${iconName}.svg`;
	span.appendChild(icon);
	return span;
};

// Train and bus icons
const trainIcon = createIconElement("transport_train", "O-Train station");
const busIcon = createIconElement("transport_bus", "Transitway station");
const pnrIcon = createIconElement(
	"service_pnr-grey.svg",
	"Park & Ride available"
);

// Append section headers with icons and titles
const appendStnListTitle = (hLevel, sectionId, title, icon, icon2) => {
	const section = document.getElementById(sectionId);
	if (section) {
		const header = document.createElement(hLevel);
		header.className = "flex flex-ai-c";
		// header.style.fontSize = "1.3rem";
		// header.style.fontWeight = "700";
		header.appendChild(icon);
		icon2 ? header.appendChild(icon2) : "";
		if (section.getAttribute("data_display_mode") == "routing") {
			lang == "en"
				? (title = title.replace("stations", "routing"))
				: (title = title.replace("Stations", "Itinéraire"));
		}
		header.append(`${title}`);
		section.prepend(header);
	}
};

// Add section headers with line icons instead of numbers
appendStnListTitle(
	"h3",
	"line1Stns",
	lang == "en" ? "Line 1 stations" : "Stations de la Ligne 1 :",
	trainIcon.cloneNode(true),
	createLineIcon(1, lang)
);
appendStnListTitle(
	"h3",
	"line1Stns_east",
	lang == "en"
		? "Line 1 East extension stations"
		: "Stations de l’Extension de la Ligne 1 Est",
	trainIcon.cloneNode(true),
	createLineIcon(1, lang)
);
appendStnListTitle(
	"h3",
	"line1Stns_west",
	lang == "en"
		? "Line 1 West extension stations"
		: "Stations de l’Extension de la Ligne 1 Ouest",
	trainIcon.cloneNode(true),
	createLineIcon(1, lang)
);
appendStnListTitle(
	"h3",
	"line2Stns",
	lang == "en" ? "Line 2 stations" : "Stations de la Ligne 2",
	trainIcon.cloneNode(true),
	createLineIcon(2, lang)
);
appendStnListTitle(
	"h3",
	"line3Stns",
	lang == "en" ? "Future Line 3 stations" : "Stations future de la Ligne 3",
	trainIcon.cloneNode(true),
	createLineIcon(3, lang)
);
appendStnListTitle(
	"h3",
	"line3Stns_west",
	lang == "en"
		? "Line 3 extension stations"
		: "Stations de l’Extension de la Ligne 3",
	trainIcon.cloneNode(true),
	createLineIcon(3, lang)
);
appendStnListTitle(
	"h3",
	"line4Stns",
	lang == "en" ? "Line 4 stations" : "Stations de la Ligne 4",
	trainIcon.cloneNode(true),
	createLineIcon(4, lang)
);
appendStnListTitle(
	"h3",
	"busStns",
	lang == "en" ? "Transit Stations" : "Stations d'autobus",
	busIcon.cloneNode(true),
	""
);

fetch("/data/stations.json")
	// fetch("/images/files/data/stations.json")
	.then((response) => response.json())
	.then((stations) => {
		// part 1 populate the stations in their respective sections
		populateStationSections(stations);

		if (lineRoutings_all) {
			for (lineRouting of lineRoutings_all) {
				sortStationsByRoutingIndex(lineRouting);
			}
		}

		if (searchInputs) {
			for (inputElement of searchInputs) {
				if (inputElement.hasAttribute("data-station-type")) {
					populateStationInput(
						inputElement,
						stations,
						inputElement.getAttribute("data-station-type")
					);
				}
			}
		}

		if (selects) {
			for (selectEl of selects) {
				if (selectEl.hasAttribute("data-station-type")) {
					populateStationSelect(
						selectEl,
						stations,
						selectEl.getAttribute("data-station-type")
					);
				}
			}
		}

		// document.getElementById("stations-select-all") ? populateStationSelect(stations) : "";
	});

function populateStationSections(stations) {
	// Loop through each station in the stations array
	stations.forEach((station) => {
		// Check if the station belongs to Line 1
		if (station.station_completed.line_1 == true) {
			addStationsToSection("line1Stns", station);
		}

		if (
			station.station_extension == "east" &&
			station.station_type.line_1 == true
		) {
			addStationsToSection("line1Stns_east", station);
		}
		if (
			station.station_extension == "west" &&
			station.station_type.line_1 == true
		) {
			addStationsToSection("line1Stns_west", station);
		}

		// Check if the station belongs to Line 2
		if (station.station_type.line_2 == true) {
			addStationsToSection("line2Stns", station);
		}

		// Check if the station belongs to Line 3
		if (station.station_type.line_3 == true) {
			addStationsToSection("line3Stns", station);
		}
		// else if (station.station_completed.line_3 == false) {
		// 	addStationsToSection("future_line3Stns", station);
		// }

		// Check if the station belongs to Line 4
		if (station.station_completed.line_4 == true) {
			addStationsToSection("line4Stns", station);
		}

		// Check if the station has bus service
		if (station.station_type.bus) {
			addStationsToSection("busStns", station);
		}
	});
}

// Helper function to add a station to a specific section
function addStationsToSection(sectionId, station) {
	const section = document.getElementById(sectionId);

	if (section) {
		if (section.getAttribute("data_display_mode") == "grid") {
			//checking if grid exists
			section.querySelector(".select-options-grid")
				? ""
				: appendGrid(section, "select-options-grid");
			// Create a new div element to represent the station
			const stationA = document.createElement("a");
			stationA.className = "select-option";
			lang == "en"
				? (stationA.href = station.station_url.prod)
				: (stationA.href = station.station_url.prod_fr);

			let stationName = "";
			if (lang == "fr") {
				station.station_name_fr
					? (stationName = station.station_name_fr)
					: (stationName = station.station_name);
			} else {
				stationName = station.station_name;
			}
			// Populate the div with the station's information and icons
			stationA.innerHTML = `
					<div class="name">
						<p>${stationName}</p>
					</div>
				`;
			// Check station features (train connections, pnr, accessible... etc)
			const lineIcons = checkStationFeatures(station, lang);
			// Append the line icons to the stationDiv
			lineIcons.forEach((icon) => stationA.appendChild(icon));
			// Append the stationDiv to the section
			section.querySelector(".select-options-grid").appendChild(stationA);
		}

		if (section.getAttribute("data_display_mode") == "routing") {
			section.querySelector(".line-routing")
				? ""
				: appendUl(section, "line-routing", sectionId);
			// Create a new div element to represent the station
			const stationA = document.createElement("a");
			const li = document.createElement("li");
			li.appendChild(stationA);

			stationA.className = "station_li";
			lang == "en"
				? (stationA.href = station.station_url.prod)
				: (stationA.href = station.station_url.prod_fr);

			// Populate the div with the station's information and icons
			stationA.innerHTML = `
					<p class="station-name">
						${
							lang == "fr"
								? station.station_name_fr
									? station.station_name_fr
									: station.station_name
								: station.station_name
						}
					</p>
				`;
			// Check station features (train connections, pnr, accessible... etc)
			const lineIcons = checkStationFeatures(station, lang);
			// Append the line icons to the stationDiv
			lineIcons.forEach((icon) => stationA.appendChild(icon));
			// Append the stationDiv to the section
			section.querySelector(".line-routing").appendChild(li);

			if (sectionId.includes("line1")) {
				li.setAttribute("data-routing-index", station.routing_index.line_1);
			}
			if (sectionId.includes("line2")) {
				li.setAttribute("data-routing-index", station.routing_index.line_2);
			}
			if (sectionId.includes("line3")) {
				li.setAttribute("data-routing-index", station.routing_index.line_3);
			}
			if (sectionId.includes("line4")) {
				li.setAttribute("data-routing-index", station.routing_index.line_4);
			}
		}
	}
}

function sortStationsByRoutingIndex(ul) {
	// Get all <li> elements as an array
	const liElements = Array.from(ul.querySelectorAll("li"));

	// Sort the <li> elements based on the data-routing-index attribute
	liElements.sort((a, b) => {
		// Parse as numbers to ensure proper numerical sorting
		const indexA = parseFloat(a.getAttribute("data-routing-index"));
		const indexB = parseFloat(b.getAttribute("data-routing-index"));
		return indexA - indexB; // Sort in ascending order
	});

	// Remove the existing <li> elements
	ul.innerHTML = "";

	// Append the sorted <li> elements back to the <ul>
	liElements.forEach((li) => ul.appendChild(li));
}

function appendUl(section, className, id) {
	let ul = document.createElement("ul");
	ul.className = `${className} ${id}`;
	section.appendChild(ul);
}

function appendGrid(section, gridType) {
	gridContainer = document.createElement("div");
	gridContainer.className = gridType;
	section.appendChild(gridContainer);
}

function checkStationFeatures(station, lang) {
	const lineIcons = [];
	// checking the station type AND if it is finished construction
	if (station.station_type.line_1) {
		lineIcons.push(createLineIcon(1, lang));
	}
	if (station.station_type.line_2) {
		lineIcons.push(createLineIcon(2, lang));
	}
	if (station.station_type.line_3) {
		lineIcons.push(createLineIcon(3, lang));
	}
	if (station.station_type.line_4) {
		lineIcons.push(createLineIcon(4, lang));
	}
	if (station.station_type.bus) {
		lineIcons.push(createIconElement("transport_bus", "Transitway station"));
	}
	if (station.station_feature.pnr) {
		lineIcons.push(
			createIconElement("service_pnr-grey", "Park & Ride station")
		);
	}
	return lineIcons;
}

// Check if parent page is stations page

const parentPage = getParentPageName(window.location.href);

function getParentPageName(currentUrl) {
	let paths = currentUrl.split("/");
	paths.forEach((item) => {
		if (item == "") {
			const index = paths.indexOf("");
			if (index > -1) {
				// only splice array when item is found
				paths.splice(index, 1); // 2nd parameter means remove one item only
			}
		}
	});
	return paths.at(-2);
}

if (parentPage.includes("stations")) {
}

function handleStationSearchForm() {
	const options = document.querySelectorAll("#all-stations option");

	document
		.getElementById("stationSearchForm")
		.addEventListener("submit", function (event) {
			console.log("form submitted");
			event.stopPropagation(); // Stop propagation after showing the alert
			event.preventDefault(); // Stop propagation after showing the alert
		});
	// Handle input change to redirect based on selected option
	document
		.getElementById("stations-select-all")
		.addEventListener("change", function (event) {
			console.log("change detected");

			const inputValue = event.target.value;
			const options = document.querySelectorAll("#all-stations option");
			let found = false;

			options.forEach((option) => {
				if (option.value === inputValue) {
					const url = option.getAttribute("data-url");
					if (url) {
						// Prevent default behavior
						event.preventDefault();
						window.location.href = url;
					}
					found = true;
				}
			});
		});
}

function populateStationInput(input, stations, stationType) {
	// input the existing <input> element by its ID
	const label = document.createElement("label");
	// create default option
	const datalist = document.createElement("datalist");
	input.insertAdjacentElement("afterend", datalist);

	if (stationType == "all") {
		datalist.id = "all-stations";
		label.textContent = "Search for a station";
		label.setAttribute("for", input.id);
		input.insertAdjacentElement("beforebegin", label);
		// Loop through each station in the provided array
		stations.forEach((station) => {
			// Create an option element
			const option = document.createElement("option");
			// Set the value attribute to the station_url.prod

			option.value = station.station_name;
			option.setAttribute("data-url", station.station_url.prod);
			// Set the text content to the station_name
			// Append the option to the input element
			datalist.appendChild(option);
		});
	}

	if (stationType == "line1") {
		datalist.id = "all-stations";
		label.textContent = "Search for a Line 1 station";
		label.setAttribute("for", input.id);
		input.insertAdjacentElement("beforebegin", label);
		input.placeholder = "Start typing for a station...";
		// Loop through each station in the provided array
		stations.forEach((station) => {
			if (station.station_type.line_1 == true) {
				// Create an option element
				const option = document.createElement("option");
				// Set the value attribute to the station_url.prod
				option.value = station.station_name;
				option.setAttribute("data-url", station.station_url.prod);
				// Set the text content to the station_name
				// Append the option to the input element
				datalist.appendChild(option);
			}
		});
	}

	if (stationType == "line2") {
		datalist.id = "all-stations";
		label.textContent = "Search for a Line 2 station";
		label.setAttribute("for", input.id);
		input.insertAdjacentElement("beforebegin", label);
		input.placeholder = "Start typing for a station...";
		// Loop through each station in the provided array
		stations.forEach((station) => {
			if (station.station_type.line_2 == true) {
				// Create an option element
				const option = document.createElement("option");
				// Set the value attribute to the station_url.prod
				option.value = station.station_name;
				option.setAttribute("data-url", station.station_url.prod);
				// Set the text content to the station_name
				// Append the option to the input element
				datalist.appendChild(option);
			}
		});
	}
	if (stationType == "line3") {
		datalist.id = "all-stations";
		label.textContent = "Search for a Line 3 station";
		label.setAttribute("for", input.id);
		input.insertAdjacentElement("beforebegin", label);
		input.placeholder = "Start typing for a station...";
		// Loop through each station in the provided array
		stations.forEach((station) => {
			if (station.station_type.line_3 == true) {
				// Create an option element
				const option = document.createElement("option");
				// Set the value attribute to the station_url.prod
				option.value = station.station_name;
				option.setAttribute("data-url", station.station_url.prod);
				// Set the text content to the station_name
				// Append the option to the input element
				datalist.appendChild(option);
			}
		});
	}
	if (stationType == "line4") {
		datalist.id = "all-stations";
		label.textContent = "Search for a Line 4 station";
		label.setAttribute("for", input.id);
		input.insertAdjacentElement("beforebegin", label);
		input.placeholder = "Start typing for a station...";
		// Loop through each station in the provided array
		stations.forEach((station) => {
			if (station.station_type.line_4 == true) {
				// Create an option element
				const option = document.createElement("option");
				// Set the value attribute to the station_url.prod
				option.value = station.station_name;
				option.setAttribute("data-url", station.station_url.prod);
				// Set the text content to the station_name
				// Append the option to the input element
				datalist.appendChild(option);
			}
		});
	}

	handleStationSearchForm();
}

function populateStationSelect(select, stations, stationType) {
	// select the existing <select> element by its ID
	const label = document.createElement("label");
	// create default option

	if (stationType == "all") {
		label.textContent = lang == "en" ? "All stations" : "Toutes les stations :";
	}
	if (stationType == "line1") {
		label.textContent =
			lang == "en"
				? "All Line 1 stations"
				: "Toutes les stations de la Ligne 1 :";
	}
	if (stationType == "line2") {
		label.textContent =
			lang == "en"
				? "All Line 2 stations"
				: "Toutes les stations de la Ligne 2 :";
	}
	if (stationType == "line3") {
		label.textContent =
			lang == "en"
				? "All Line 3 stations"
				: "Toutes les stations de la Ligne 3 :";
	}
	if (stationType == "line4") {
		label.textContent =
			lang == "en"
				? "All Line 4 stations"
				: "Toutes les stations de la Ligne 4 :";
	}
	if (stationType == "bus") {
		label.textContent =
			lang == "en"
				? "All bus stations"
				: "Sélectionner une station d'autobus :";
	}

	label.setAttribute("for", select.id);
	select.insertAdjacentElement("beforebegin", label);
	// Loop through each station in the provided array
	stations.forEach((station) => {
		// Create an option element
		const option = document.createElement("option");
		// Set the value attribute to the station_url.prod
		option.value = station.station_url.prod;

		if (lang == "en") {
			option.textContent = station.station_name;
		}
		if (lang == "fr") {
			station.station_name_fr
				? (option.textContent = station.station_name_fr)
				: (option.textContent = station.station_name);
		}
		// Set the text content to the station_name
		// Append the option to the select element

		if (stationType == "all") {
			select.appendChild(option);
		}
		if (stationType == "line1") {
			station.station_type.line_1 == true ? select.appendChild(option) : "";
		}
		if (stationType == "line2") {
			station.station_type.line_2 == true ? select.appendChild(option) : "";
		}
		if (stationType == "line3") {
			station.station_type.line_3 == true ? select.appendChild(option) : "";
		}
		if (stationType == "line4") {
			station.station_type.line_4 == true ? select.appendChild(option) : "";
		}
		if (stationType == "bus") {
			station.station_type.bus == true ? select.appendChild(option) : "";
		}
	});
}
