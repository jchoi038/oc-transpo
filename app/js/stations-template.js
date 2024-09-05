/* This code is for dynamically styling the station page h1 banner */
const lang = checkPageLanguage();

const h1Element = document.querySelector("h1");
var infoCard_address = document.getElementById("station-address");
var infoCard_stationType = document.getElementById("station-type");
var quicklinks_container = document.getElementById("quicklinks-container");
var stationType = "";
var infoCard = document.getElementById("station-info-card");
var infoCard_title = document.getElementById("station-info-card-title");
var infoCard_body = document.getElementById("station-info-card-body");
const station560 = document.getElementById("station560");
var infoCard_stationRoutes = document.getElementById("station-routes");
var stationLines = document.createElement("div");
var stationHeroImg = document.getElementById("station-hero-img");
var stationLayoutMap = document.getElementsByClassName("station-layout-map");
var section_busBoardingLocations = document.getElementById("bus-boarding-info");
var section_trainBoarding = document.getElementById("train-boarding-info");
var section_stationLayout = document.getElementById("section_station-layout");
var section_nearby = document.getElementById("nearby");
var nearbyContent = document.getElementById("nearby-content");
var section_amenities = document.getElementById("amenities");
var section_360 = document.getElementById("360");
addCardTags();
const nearby_within5kmContent = document.getElementById(
	"within-5km-card-content"
);
nearby_within5kmContent
	? transformListToCard(
			nearby_within5kmContent,
			"card decor-card within-5km navy",
			"Places of interest within 5 min")
	: "";
const nearby_alsoNearbyContent = document.getElementById(
	"also-nearby-card-content"
);
nearby_alsoNearbyContent
	? transformListToCard(
			nearby_alsoNearbyContent,
			"card decor-card nearby blue",
			"Also close-by")
	: "";
const amenities_faresMadeEasyContent = document.getElementById(
	"fares-made-easy-card-content"
);

amenities_faresMadeEasyContent
	? transformListToCard(
			amenities_faresMadeEasyContent,
			"card decor-card fares-made-easy",
			"Fares made easy")
	: "";

const amenities_wayfindingContent = document.getElementById(
	"wayfinding-card-content"
);

amenities_wayfindingContent
	? transformListToCard(
			amenities_wayfindingContent,
			"card decor-card wayfinding",
			"Navigation and wayfinding")
	: "";
const amenities_accessibilityContent = document.getElementById(
	"accessibiliy-card-content"
);
amenities_accessibilityContent
	? transformListToCard(
			amenities_accessibilityContent,
			"card decor-card accessibility",
			"Accessibility")
	: "";
const amenities_cyclistContent = document.getElementById(
	"cyclist-card-content"
);

amenities_cyclistContent ? transformListToCard(
	amenities_cyclistContent,
	"card decor-card cyclist",
	"Cyclist amenities"
) : "" ;


const amenities_safetyContent = document.getElementById("safety-card-content");
amenities_safetyContent ? transformListToCard(
	amenities_safetyContent,
	"card decor-card safety",
	"Safety & security"
) : "";
const amenities_comfortContent = document.getElementById(
	"comfort-card-content"
);

amenities_comfortContent ? transformListToCard(
	amenities_comfortContent,
	"card decor-card comfort",
	"Comfort and convenience"
) : "";





document.addEventListener("DOMContentLoaded", () => {
	const originalContent = h1Element.textContent; // Get the original text content

	if (section_stationLayout) {
		createSectionH2("Station layout", section_stationLayout);
	}
	/***********  Part 1 ***********/
	// Add the 'station-banner' class
	h1Element.classList.add("station-banner");
	// Wrap the existing content in a <span>
	h1Element.innerHTML = `<span class="station-banner__title">${originalContent}</span>`; // Wrap it in a <span>

	//add h2 titles to sections
	section_nearby ? createSectionH2("What's nearby", section_nearby) : "";
	section_amenities ? createSectionH2("Features & amenities", section_amenities) : "";

	// Create the new elements
	const logo = document.createElement("img");
	logo.src =
		"https://www.octranspo.com/images/files/Network_Service_Change/O-heading-icon.png";
	logo.className = "logo";
	h1Element.prepend(logo.cloneNode(true));

	lang == "en" ? logo.alt = "OC Transpo logo" : logo.alt = "french trans needed";

	const line1 = document.createElement("span");
	line1.className = "rt rt-type--line1";
	lang == "en" ? line1.innerHTML = `<span class="visuallyhidden">Line </span>1` : line1.innerHTML = `<span class="visuallyhidden">Ligne </span>1`;


	const line2 = document.createElement("span");
	line2.className = "rt rt-type--line2";
	lang == "en" ? line2.innerHTML = `<span class="visuallyhidden">Line </span>2` : line2.innerHTML = `<span class="visuallyhidden">Ligne </span>2`;



	const line3 = document.createElement("span");
	line3.className = "rt rt-type--line3";
	lang == "en" ? line3.innerHTML = `<span class="visuallyhidden">Line </span>3` : line3.innerHTML = `<span class="visuallyhidden">Ligne </span>3`;


	const line4 = document.createElement("span");
	line4.className = "rt rt-type--line4";
	lang == "en" ? line4.innerHTML = `<span class="visuallyhidden">Line </span>4` : line4.innerHTML = `<span class="visuallyhidden">Ligne </span>4`;


	if (infoCard) {
		lang == "en" ? infoCard_title.textContent = "Station Information" : 	infoCard_title.textContent = "french trans needed";
	}

	const trainIcon = document.createElement("img");
	trainIcon.className = "inline-icon";
	lang == "en" ? trainIcon.alt = `O-Train station` : trainIcon.innerHTML = `Station de l'O-Train`;

	trainIcon.src =
		"https://www.octranspo.com/images/files/icons/transport_train-white.svg";

	const busIcon = document.createElement("img");
	busIcon.className = "inline-icon";
	lang == "en" ? busIcon.alt = `Transitway station` : 	busIcon.innerHTML = ` Stations du transport en commun`;
	busIcon.src =
		"https://www.octranspo.com/images/files/icons/transport_bus-white.svg";

	fetch("/data/stations.json")
		// fetch("/images/files/data/stations.json")
		.then((response) => response.json())
		.then((data) => {
			let matchingStation = data.find(
				(station) =>
					station.station_name == originalContent ||
					station.station_name_fr == originalContent
			);

			let lines = document.createElement("div");

			if (matchingStation) {
				//get 560 number from matching station
				if (quicklinks_container) {
					initializeQuickLinksSection(matchingStation);
				}

				if (matchingStation.station_hero_url && stationHeroImg) {
					stationHeroImg.style.backgroundImage = `url(${matchingStation.station_hero_url})`;
				}
				if (section_360) {
					if (matchingStation.station_360_url) {
						createSectionH2("360-Degree tour", section_360);
						populate360Section(matchingStation.station_360_url);
					} else {
						section_360.remove();
					}
				}

				if (matchingStation.station_nearby_map_url) {
					let nearby_map_url = matchingStation.station_nearby_map_url;
					let altText = `Places of interest within a 5-minute walk of ${matchingStation.station_name} Station`;

					//call createFancyImageComponent to create fancy image component and let image and link url be equal to map_url
					//createFancyImageComponent function will have two variables: image src and alt text
					let nearby_map = createFancyboxContainer(nearby_map_url, altText);
					//add inline style to fancy image component flex=1 0 240px
					nearby_map.style.flex = "1 0 240px";
					//append to section_nearby component
					nearbyContent?.appendChild(nearby_map);
				}

				if (matchingStation.station_layout_map_url && stationLayoutMap) {
					for (let i = 0; i < stationLayoutMap.length; i++) {
						stationLayoutMap[
							i
						].src = `${matchingStation.station_layout_map_url}`;
					}
				}
				if (
					matchingStation.station_layout_map_url == "" &&
					section_stationLayout
				) {
					// section_stationLayout.remove();
					for (let i = 0; i < stationLayoutMap.length; i++) {
						stationLayoutMap[i].src =
							"https://staging.octranspo1.com/images/files/test/placeholder.png";
					}
				}

				// Check which lines or bus services the station belongs to and append the icons accordingly
				if (matchingStation.station_type.line_1 == true) {
					h1Element.appendChild(line1.cloneNode(true)); // Add Line 1 number
					lines.appendChild(line1.cloneNode(true));
				}
				if (matchingStation.station_type.line_2 == true) {
					h1Element.appendChild(line2.cloneNode(true)); // Add Line 1 number

					lines.appendChild(line2.cloneNode(true));
				}
				if (matchingStation.station_type.line_3 == true) {
					h1Element.appendChild(line3.cloneNode(true)); // Add Line 1 number

					lines.appendChild(line3.cloneNode(true));
				}
				if (matchingStation.station_type.line_4 == true) {
					h1Element.appendChild(line4.cloneNode(true)); // Add Line 1 number
					lines.appendChild(line4.cloneNode(true));
				}

				if (
					matchingStation.station_type.line_1 == true ||
					matchingStation.station_type.line_2 == true ||
					matchingStation.station_type.line_3 == true ||
					matchingStation.station_type.line_4 == true
				) {
					h1Element.appendChild(trainIcon.cloneNode()); // Add train icon
					stationType = "Train station";
					if (section_trainBoarding) {
						createTrainBoardingInfoTable(matchingStation);
					}
				} else {
					document.getElementById("station-lines-li").remove();
				}
				// Check if the station is in the bus station array and append the bus icon
				if (matchingStation.station_type.bus == true) {
					h1Element.appendChild(busIcon.cloneNode()); // Add bus icon

					stationType = stationType + " | " + "Transit station";
				}
			} else {
				console.error("No matching station found.");
			}
			if (infoCard) {
				//if 560 exists, add 560 to station info card
				if (matchingStation.station_560) {
					let no560 = document.createElement("strong");
					no560.textContent = matchingStation.station_560;
					insertInCardBody("560#: ", no560);
				}
				//if address exists
				let address = document.createElement("a");
				let accessPoint = document.createElement("p");
				if (
					matchingStation.station_address &&
					matchingStation.google_map_link
				) {
					address.textContent = matchingStation.station_address;
					address.href = matchingStation.google_map_link;
				}
				if (matchingStation.station_access) {
					accessPoint.textContent = matchingStation.station_access;
				} else {
					accessPoint.textContent = "";
				}
				let location = document.createElement("div");
				address.innerHTML ? location.appendChild(address) :"" ;
				accessPoint.innerHTML ? location.appendChild(accessPoint): "";

				location ? insertInCardBody("", location) : "";
				

				//if access point text exists

				//
				if (infoCard_stationType) {
					insertInCardBody("", stationType);
				}
				//
				if (lines) {
					let title = document.createElement("p");
					title.textContent = "O-Train connections: ";
					insertInCardBody(title, lines);
				}
			}
			/***********  Part 2 ***********/
			/* Generate borading location table content */
			// get all dynamic elements

			fetch("/data/stopRecipes.json")
				// fetch("/images/files/data/stopRecipes.json")
				.then((response) => response.json())
				.then((stopRecipes) => {
					if (section_busBoardingLocations) {
						createBusBoardingLocationsSection(matchingStation, stopRecipes);
					}
					//end
				});

			// /***********  Part 3 ***********/
			// /* Add station status  */
		})
		.catch((error) => console.error("Error fetching JSON:", error));

	function createSection() {
		var section = document.createElement("section");
		section.classList.add("section");
		return section;
	}

	function addTextContent(el, text) {
		el.textContent = `${text}`;
	}
	function addhref(el, link) {
		el.href = `${link}`;
	}
	function addsrc(el, url) {
		el.src = `${url}`;
	}
});

function createSectionH2(title, section) {
	let sectionTitle = document.createElement("h2");
	sectionTitle.textContent = title;
	section.prepend(sectionTitle);
}

// Container to which the anchor elements will be appended
function initializeQuickLinksSection(matchingStation) {
	const quickLinks = [
		{
			id: "quicklinks-card_pnr",
			href: "",
			className: "card quick-link-card parking",
			textContent: "Park & Ride",
			titleAttr: "Learn more about parking at the station",
		},
		{
			id: "quicklinks-card_schedules",
			href: "",
			className: "card quick-link-card schedules",
			textContent: "Station schedule",
			titleAttr: "View station schedule",
		},
		{
			id: "quicklinks-card_station-layout",
			href: "#section_station-layout",
			className: "card quick-link-card map",
			textContent: "Station layout",
			titleAttr: "View station layout",
		},
		{
			id: "quicklinks-card_amenities",
			href: "#amenities",
			className: "card quick-link-card washroom",
			textContent: "Amenities",
			titleAttr: "View station features & amenities",
		},
		{
			id: "quicklinks-card_connections",
			href: "#stops",
			className: "card quick-link-card connection",
			textContent: "Boarding locations",
			titleAttr: "View station boarding locations",
		},
		{
			id: "quicklinks-card_tour360",
			href: "#360",
			className: "card quick-link-card tour-360",
			textContent: "360-Deg tour",
			titleAttr: "Explore the station with 360-Deg virtual tour",
		},
		{
			id: "quicklinks-card_nearby",
			href: "#nearby",
			className: "card quick-link-card walk",
			textContent: "What's nearby",
			titleAttr: "Explore what's nearby the station",
		},
		{
			id: "quicklinks-card_explore",
			href: "#explore",
			className: "card quick-link-card sparkle",
			textContent: "Explore more",
			titleAttr: "Learn more about the station",
		}
	];

	quickLinks.forEach((link) => {
		let linkedTo = link.href.replace("#", "");
		if (
			document.getElementById(linkedTo) ||
			link.id == "quicklinks-card_schedules" || link.id == "quicklinks-card_pnr"
		) {
			const anchorElement = createQuickLinkCardElement(
				link.id,
				link.href,
				link.className,
				link.textContent,
				link.titleAttr
			);

			// Always create station layout section
			if (link.id == "quicklinks-card_station-layout") {
				quicklinks_container?.appendChild(anchorElement);
			}

			//Only create SCHEDULES quicklink card if station has schedules link
			if (document.getElementById("stops") && linkedTo == "stops") {
				quicklinks_container?.appendChild(anchorElement);
			}
			// Only create PnR quicklink card if stations has a parking lot
			if (link.id == "quicklinks-card_pnr" && matchingStation.station_urls.pnr) {
				let fullPnrUrl = ""
				if (lang == "en"){
					fullPnrUrl = `/our-services/park-ride/${matchingStation.station_urls.pnr}`
				} else {
					fullPnrUrl = `/nos-services/parcs-o-bus/${matchingStation.station_urls.pnr}`
				}
				anchorElement.href = fullPnrUrl
				quicklinks_container?.appendChild(anchorElement);
			}
			//Only create SCHEDULES quicklink card if station has schedules link
			if (
				link.id == "quicklinks-card_schedules" && matchingStation.station_schedules_url
			) {
				anchorElement.href =  matchingStation.station_schedules_url
				quicklinks_container?.appendChild(anchorElement);
			}
			
			

			//Only create AMENITIES quicklink card if station has amenities section
			if (section_amenities && linkedTo == "amenities") {
				quicklinks_container?.appendChild(anchorElement);
			}
			//Only create 360 quicklink card if station has 360-tour url
			if (matchingStation.station_360_url && linkedTo == "360") {
				quicklinks_container?.appendChild(anchorElement);
			}
		}
	});
}

// Function to create a Quick link card element
function createQuickLinkCardElement(
	id,
	href,
	className,
	textContent,
	titleAttr
) {
	const a = document.createElement("a");
	a.id = id;
	a.href = href;
	a.className = className;
	a.title = titleAttr;

	const span = document.createElement("span");
	span.className = "card__title";
	span.textContent = textContent;

	a.appendChild(span);
	return a;
}

function createDiv() {
	var div = document.createElement("div");
	return div;
}

function createTrainBoardingInfoTable(station) {
	// Create the table element
	const table = document.createElement("table");
	table.className = "light boarding-locations";

	// Create the caption
	const caption = document.createElement("caption");
	caption.textContent = "Train platforms";

	table.appendChild(caption);

	// Create the table body
	const tbody = document.createElement("tbody");
	// tbody.className = "grid--2col";

	// Loop through the stations and create rows
	if (
		station.station_type.line_1 &&
		station.station_name != "Tunney’s Pasture"
	) {
		addRow(tbody, "Tunney's Pasture", "line1", "1", "West");
	}
	if (station.station_type.line_1 && station.station_name != "Blair") {
		addRow(tbody, "Blair", "line1", "1", "East");
	}
	if (station.station_type.line_2 && station.station_name != "Limebank") {
		addRow(tbody, "Limebank", "line2", "2", "South");
	}
	if (station.station_type.line_2 && station.station_name != "Bayview") {
		addRow(tbody, "Bayview", "line2", "2", "North");
	}
	if (station.station_type.line_4 && station.station_name != "Airport") {
		addRow(tbody, "Airport", "line4", "4", "...");
	}
	if (station.station_type.line_4 && station.station_name != "South Keys") {
		addRow(tbody, "South Keys", "line4", "4", "...");
	}
	// Append the tbody to the table
	table.appendChild(tbody);

	// Add the table to the DOM (e.g., in a specific container)
	section_trainBoarding.appendChild(table);

	if (
		station.station_type.line_2 == true ||
		station.station_type.line_4 == true
	) {
		section_trainBoarding.appendChild(
			createInfoNote("Line 2 and Line 4 will open on [date]")
		);
	}
}

// Helper function to add a row to the table
function addRow(tbody, destination, lineClass, lineNumber, direction) {
	const tr = document.createElement("tr");
	tr.innerHTML = `
        <td>
            <img src="https://www.octranspo.com/images/files/icons/transport_train.svg" alt="train">
            <span class="rt rt-type--${lineClass}">${lineNumber}</span>
            <span class="visuallyhidden">Line ${lineNumber}</span> ${destination}
        </td>
        <td><span class="bus-stop">${direction}</span></td>
    `;
	tbody.appendChild(tr);
}

// create bus boarding table route stopRecipes.json
function appendRowsToBusBoardingTable(tbody, routes, stop) {
	let rows = []; // Array to store the rows
	for (var route of routes) {
		let row = document.createElement("tr");

		let cellRoute = document.createElement("td");
		let route_icon = "";

		route_icon = route.split("[")[1].replace("]", "");
		switch (route_icon) {
			case "BLU":
				route_icon = "frequent";
				break;
			case "BOW":
				route_icon = "frequent_l";
				break;
			case "GRY":
				route_icon = "local";
				break;
			case "GOW":
				route_icon = "local_l";
				break;
			case "PUR":
				route_icon = "connexion";
				break;
		}
		route = route.split("[")[0];
		cellRoute.textContent = route;
		// Replace the first word (which is the route number) of each cell to wrap with <span>
		cellRoute.innerHTML = cellRoute.textContent.replace(
			/^(<[^\/]*[^>]*>)*(\w+\b)/g,
			`$1<span class="rt rt-type--${route_icon}">$2</span>`
		);

		let cellStopName = document.createElement("td");
		let stopName = document.createElement("span");
		stopName.innerHTML = stop
			// .replace(`${stationName.toUpperCase()} `, "")
			.replace("(", "")
			.replace(")", "");
		// .replace(" ","&nbsp;");

		// .slice(-1);
		stopName.className = "bus-stop";

		row.appendChild(cellRoute);
		cellStopName.appendChild(stopName);
		row.appendChild(cellStopName);

		// Add the row to the array
		rows.push(row);
	}

	// Sort rows numerically based on the route number
	rows.sort((a, b) => {
		let routeA = parseInt(a.querySelector("td").textContent.trim(), 10);
		let routeB = parseInt(b.querySelector("td").textContent.trim(), 10);
		return routeA - routeB;
	});

	// Append the sorted rows to the tbody
	for (let row of rows) {
		tbody.appendChild(row);
	}
}

function checkPageLanguage() {
	currentUrl = window.location.href;

	if(currentUrl.indexOf("/fr/") == -1) {
		return "en"
	} else{
		return "fr";
	}
}

function createInfoNote(text) {
	// Create the main div with the class 'note note__type--info'
	const noteDiv = document.createElement("div");
	noteDiv.className = "note note__type--info";

	// Create the paragraph with the class 'note__body'
	const noteParagraph = document.createElement("p");
	noteParagraph.className = "note__body";
	noteParagraph.textContent = text;

	// Append the paragraph to the div
	noteDiv.appendChild(noteParagraph);

	// Append the noteDiv to the DOM (e.g., inside a specific container)
	return noteDiv;
}

function createBusBoardingLocationsSection(matchingStation, stopRecipes) {
	section_busBoardingLocations?.appendChild(createDiv());

	// creating stop tables start
	let table = document.createElement("table");
	let thead = document.createElement("thead");
	let caption = document.createElement("caption");
	caption.textContent = "Train platform location";
	caption.className = "banner banner--nwtb mb-0";
	caption.style.borderRadius = "0.5rem 0.5rem 0 0";
	caption.style.paddingTop = "0.5rem";
	caption.style.paddingBottom = "0.5rem";
	let tbody = document.createElement("tbody");
	// if (matchingStation.connecting_stops) {
	// 	let connectingStops = createArrayFromCommaSeperatedList(
	// 		matchingStation.connecting_stops
	// 	);
	// }

	// Create header row with "Route" and "Stop Name" (only once)
	let headerRow = document.createElement("tr");

	let row_routeHeader = document.createElement("th");
	row_routeHeader.textContent = "Route";
	headerRow.appendChild(row_routeHeader);

	let row_stopNameHeader = document.createElement("th");
	row_stopNameHeader.textContent = "Stop Name";
	headerRow.appendChild(row_stopNameHeader);

	// thead.appendChild(headerRow);
	caption.textContent = "New Ways to Bus boarding locations";
	thead.style.grid_column = "1 / -1";

	for (var stop of stopRecipes) {
		// Only do the following if the stop is a station stop
		//finding the matching station 560 in stop recipes
		if (matchingStation.station_560 == stop.stop_560) {
			let routes = stop.routes.split(", ");
			appendRowsToBusBoardingTable(tbody, routes, stop.name);

			// ADD logic: add the connecting route 560s here to routes variable
			//if Train Station has a connection bus stop
		}

		if (matchingStation.connecting_stops != "") {
			for (var connectingStop of matchingStation.connecting_stops.split(", ")) {
				if (connectingStop == stop.stop_560) {
					let routes = stop.routes.split(", ");
					appendRowsToBusBoardingTable(
						tbody,
						routes,
						`#${stop.stop_560}`,
						matchingStation.station_name
					);
				}
			}
		}
	}
	// Logic to build tables end
	// table.appendChild(thead);
	if (tbody.innerHTML != "") {
		table.appendChild(caption);
		table.appendChild(tbody);
		section_busBoardingLocations.appendChild(table);
		section_busBoardingLocations.appendChild(
			createInfoNote("New Ways to Bus bus service will begin [date]")
		);
		table.className = "light boarding-locations";
		// tbody.className = "grid--3col";
		buildRouteListParagraph(tbody);
	}
	if (tbody.innerHTML == "") {
		section_busBoardingLocations.remove();
	}
}
function buildRouteListParagraph(tbody) {
	// Extract the first <span> in each <td> and create a list of unique spans
	let routeSpans = tbody.querySelectorAll("td > span.rt");
	let uniqueSpans = new Map(); // Use a Map to store unique spans by their text content
	routeSpans.forEach((span) => {
		let routeNumber = span.textContent.trim();
		if (!uniqueSpans.has(routeNumber)) {
			uniqueSpans.set(routeNumber, span.cloneNode(true)); // Clone the span to keep the original intact
		}
	});

	let routeListParagraph = document.createElement("p");
	routeListParagraph.className = "p-1 bordered";
	routeListParagraph.style.borderRadius = "0 0 0.5rem 0.5rem";

	let content = document.createElement("div");
	content.appendChild(routeListParagraph);

	// content.appendChild(createInfoNote("New Ways to Bus service will begin on [date]"))

	// Append each unique span to the paragraph
	uniqueSpans.forEach((span) => {
		routeListParagraph.appendChild(span);
		routeListParagraph.appendChild(document.createTextNode(" ")); // Add space between spans
	});
	let title = document.createElement("p");
	title.textContent = "New Ways to Bus service:";
	title.className = "banner banner--nwtb mb-0";
	title.style.borderRadius = "0.5rem 0.5rem 0 0";
	title.style.paddingTop = "0.5rem";
	title.style.paddingBottom = "0.5rem";
	//NWTB
	insertInCardBody(title, content);
}

function insertInCardBody(title, content) {
	let item = document.createElement("li");
	infoCard_body?.appendChild(item);
	if (title != "") item.append(title);
	item.append(content);
}

function transformListToCard(ulElement, classList, title) {
	// Create a new <div> element with the desired classes
	const cardDiv = document.createElement("div");
	cardDiv.className = classList;

	// Create the <h4> element for the title
	const titleElement = document.createElement("h4");
	titleElement.classList.add("card__title");
	titleElement.textContent = title;

	// Append the <h4> title to the new <div>
	cardDiv.appendChild(titleElement);

	// Append the <ul> to the new <div>
	cardDiv.appendChild(ulElement.cloneNode(true));

	// Insert the new <div> before the original <ul>
	ulElement.parentNode.insertBefore(cardDiv, ulElement);

	// Remove the original <ul>
	ulElement.remove();
}

function populate360Section(url) {
	// Create the <div> element with class "grid--2col"
	const gridDiv = document.createElement("div");
	gridDiv.classList.add("grid--2col");

	// Create the <div> element with class "iframe-container"
	const iframeContainerDiv = document.createElement("div");
	iframeContainerDiv.classList.add("iframe-container");

	// Create the <p> element containing the iframe
	const iframeParagraph = document.createElement("p");
	const iframe = document.createElement("iframe");
	iframe.setAttribute("allow", "xr-spatial-tracking");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("height", "480");
	iframe.setAttribute("src", url);
	iframe.setAttribute("width", "853");

	// Append the iframe to the <p> element, then the <p> to the iframe container
	iframeParagraph.appendChild(iframe);
	iframeContainerDiv.appendChild(iframeParagraph);

	// Create the <ul> element with class "card-list col"
	const ulElement = document.createElement("ul");
	ulElement.classList.add("card-list", "col");

	// Create the list items <li> elements and append them to the <ul>
	const listItems = [
		"<strong>Easy navigation:</strong> Simply use your mouse to explore the interior of the station. Change floors effortlessly by clicking on the 'Station Level guide' located at the bottom left.",
		"<strong>Discover station Features:</strong> Click on the red and white ‘O’ buttons scattered around the station for detailed information about its features.",
		"<strong>Tour date:</strong> Note that this tour was recorded in 2024. Any fencing visible in the tour has now been removed.",
		"<strong>Loading time:</strong> After pressing 'Play', please wait momentarily for the tour to load completely for an uninterrupted experience.",
	];

	listItems.forEach((itemText) => {
		const li = document.createElement("li");
		li.innerHTML = itemText;
		ulElement.appendChild(li);
	});

	// Append the iframe container <div> and the <ul> to the grid <div>
	gridDiv.appendChild(iframeContainerDiv);
	gridDiv.appendChild(ulElement);

	// Append the grid <div> to the section
	section_360.appendChild(gridDiv);
}

function createFancyboxContainer(url, altText) {
	// Create anchor element with FancyBox class and attributes
	const fancyboxContainer = document.createElement("a");

	fancyboxContainer.className = "fancybox-media";
	fancyboxContainer.href = url;
	fancyboxContainer.title = altText;

	// Create image element with attributes
	const imgElement = document.createElement("img");
	imgElement.src = url;
	imgElement.alt = altText;

	// Append the image to the anchor
	fancyboxContainer.appendChild(imgElement);
	return fancyboxContainer;
}

function addCardTags() {
	// Select all list items
	const listItems = document.querySelectorAll("li.update, li.fact");
	listItems.forEach((item) => {
		// Determine the type (update or quick fact)
		const isUpdate = item.classList.contains("update");
		const tagText = isUpdate ? "Update" : "Quick facts";
		const tagTypeClass = isUpdate ? "tag-type__special" : "tag-type__keyword";

		// Create the new div tag
		const tagDiv = document.createElement("div");
		tagDiv.className = `tag ${tagTypeClass}`;
		tagDiv.textContent = tagText;

		// Clear the original class from the list item
		item.className = "";

		// Insert the tag div before the text content
		item.insertBefore(tagDiv, item.firstChild);
	});
}

/******** Part III: auto generating list of stations */
// Helper function to create line icon elements
const createLineIcon = (lineNumber, lang) => {
    const line = document.createElement("span");
    line.className = `rt rt-type--line${lineNumber}`;
    line.innerHTML = lang === "en" 
        ? `<span class="visuallyhidden">Line </span>${lineNumber}` 
        : `<span class="visuallyhidden">Ligne </span>${lineNumber}`;
    return line;
};

// Helper function to create transport icons (train/bus)
const createIconElement = (iconName, altText) => {
    const icon = document.createElement("img");
    icon.className = "inline-icon";
    icon.alt = altText;
    icon.src = `https://www.octranspo.com/images/files/icons/${iconName}.svg`;
    return icon;
};

// Train and bus icons
const trainIcon = createIconElement("transport_train", "O-Train station");
const busIcon = createIconElement("transport_bus", "Transitway station");
const pnrIcon = createIconElement("service_pnr.svg", "Park & Ride available");

// Append section headers with icons and titles
const appendSectionHeader = (sectionId, title, icon, icon2) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const header = document.createElement("h2");
        header.className = "flex flex-ai-c";
        header.appendChild(icon);
        icon2 ? header.appendChild(icon2) : "";
        header.append(` ${title}`);
        section.prepend(header);
    }
};

// Add section headers with line icons instead of numbers
appendSectionHeader("line1Stns", "Line 1 stations", trainIcon.cloneNode(true), createLineIcon(1, lang),);
appendSectionHeader("future_line1Stns", "Future Line 1 stations", trainIcon.cloneNode(true), createLineIcon(1, lang),);
appendSectionHeader("line2Stns", "Line 2 stations", trainIcon.cloneNode(true), createLineIcon(2, lang),);
appendSectionHeader("line3Stns", "Line 3 stations", trainIcon.cloneNode(true), createLineIcon(3, lang),);
appendSectionHeader("future_line3Stns", "Future Line 3 stations", trainIcon.cloneNode(true), createLineIcon(3, lang),);
appendSectionHeader("line4Stns", "Line 4 stations", trainIcon.cloneNode(true), createLineIcon(4, lang),);
appendSectionHeader("busStns", "Transit Stations", busIcon.cloneNode(true), "");



fetch("/data/stations.json")
	// fetch("/images/files/data/stations.json")
	.then((response) => response.json())
	.then((stations) => {
        populateStationSections(stations)
	});

function populateStationSections(stations) {
	// Loop through each station in the stations array
	stations.forEach((station) => {
		// Check if the station belongs to Line 1
		if (station.station_completed.line_1 == true ) {
			addStationToSection("line1Stns", station);
		} else if(station.station_completed.line_1 == false) {
			addStationToSection("future_line1Stns", station);
        }

		// Check if the station belongs to Line 2
		if (station.station_completed.line_2 == true ) {
			addStationToSection("line2Stns", station);
		}

		// Check if the station belongs to Line 3
		if (station.station_completed.line_3 == true ) {
			addStationToSection("line3Stns", station);
		}else if(station.station_completed.line_3 == false) {
			addStationToSection("future_line3Stns", station);
        }

		// Check if the station belongs to Line 4
		if (station.station_completed.line_4 == true ) {
			addStationToSection("line4Stns", station);
		}

		// Check if the station has bus service
		if (station.station_type.bus) {
			addStationToSection("busStns", station);
		}
	});
}

// Helper function to add a station to a specific section
function addStationToSection(sectionId, station) {
	const section = document.getElementById(sectionId);
	if (section) {
		section.querySelector(".select-options-grid")
			? ""
			: appendGrid(section, "select-options-grid");
		// Create a new div element to represent the station
		const stationA = document.createElement("a");
		stationA.className = "select-option";
        stationA.href = station.station_urls.staging

                // Populate the div with the station's information and icons
                stationA.innerHTML = `
                <div class="name">
                    <p>${station.station_name}</p>
                </div>
            `;

            // Check station features (train connections, pnr, accessible... etc)
            const lang = checkPageLanguage();
            const lineIcons = checkStationFeatures(station, lang)



        // Append the line icons to the stationDiv
        lineIcons.forEach(icon => stationA.appendChild(icon));

        // Append the stationDiv to the section
        section.querySelector(".select-options-grid").appendChild(stationA);
	}
}

function appendGrid(section, gridType) {
	gridContainer = document.createElement("div");
	gridContainer.className = gridType;
	section.appendChild(gridContainer);
}

function checkPageLanguage() {
	currentUrl = window.location.href;
	let lang = ""
	currentUrl.indexOf("/fr/") ? lang = "fr" : lang = "en";
	return lang;
}

function checkStationFeatures(station, lang){
    const lineIcons = []
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
        lineIcons.push(createIconElement("service_pnr", "Park & Ride station"));
    }
    return lineIcons
}