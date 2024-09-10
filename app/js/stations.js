/* This code is for dynamically styling the station page h1 banner */
const lang = checkPageLanguage();

var section_stationLayout = document.getElementById("layout");
var section_amenities = document.getElementById("amenities");
var section_stops = document.getElementById("stops");
var section_nearby = document.getElementById("nearby");
var section_360 = document.getElementById("360");
var section_explore = document.getElementById("explore");

// if (lang == "fr") {
// 	var section_stationLayout = document.getElementById("carte");
// 	var section_amenities = document.getElementById("amenagements");
// 	var section_stops = document.getElementById("arret");
// 	var section_nearby = document.getElementById("proximite");
// 	var section_360 = document.getElementById("360");
// 	var section_explore = document.getElementById("savoir");
// }
if (lang == "fr") {
	section_stationLayout.id = "carte";
	section_amenities.id = "amenagements";
	section_stops.id = "arret";
	section_nearby.id = "proximite";
	section_360.id = "360";
	section_explore.id = "savoir";
}

const h1Element = document.querySelector("h1");
var quicklinks_container = document.getElementById("quicklinks-container");
var stationType = document.createElement("p");
stationType.textContent.textContent = "";
var infoCard = document.getElementById("station-info-card");
const station560 = document.getElementById("station560");
var stationLines = document.createElement("div");
var stationRoutes = document.createElement("div");
var stationLayoutMap = document.getElementsByClassName("station-layout-map");
var section_busBoardingLocations = document.getElementById("bus-boarding-info");
var section_trainBoarding = document.getElementById("train-boarding-info");
var jsDisabled = document.getElementById("js-disabled");

addCardTags();
transformExploreSection();

// Creating layouts
quicklinks_container.className = "grid grid-5-4-2-2";
section_stationLayout.className = "grid grid-2fr-1fr";
section_amenities.className = "flex cards-overflow-x-container";
section_nearby.className = "flex";
section_trainBoarding.className = "sub-section";
section_busBoardingLocations.className = "sub-section";
const nearby_within5km_card = document.getElementById("within-5km-card");
nearby_within5km_card
	? createDecorCard(
			nearby_within5km_card,
			"card decor-card within-5km navy",
			lang == "en"
				? "Places of interest within 5 min"
				: "Sites d'intérêt à moins de 5 minutes"
	  )
	: "";
const nearby_alsoNearby_card = document.getElementById("also-nearby-card");
nearby_alsoNearby_card
	? createDecorCard(
			nearby_alsoNearby_card,
			"card decor-card nearby blue",
			lang == "en" ? "Also close-by" : "Aussi à proximité"
	  )
	: "";
const amenities_faresMadeEasy_card = document.getElementById(
	"fares-made-easy-card"
);

amenities_faresMadeEasy_card
	? createDecorCard(
			amenities_faresMadeEasy_card,
			"card decor-card fares-made-easy",
			lang == "en" ? "Fares made easy" : "Paiement facile"
	  )
	: "";

const amenities_wayfinding_card = document.getElementById("wayfinding-card");

amenities_wayfinding_card
	? createDecorCard(
			amenities_wayfinding_card,
			"card decor-card wayfinding",
			lang == "en" ? "Navigation and wayfinding" : "Déplacement et orientation"
	  )
	: "";
const amenities_accessibility_card =
	document.getElementById("accessibiliy-card");
amenities_accessibility_card
	? createDecorCard(
			amenities_accessibility_card,
			"card decor-card accessibility",
			lang == "en" ? "Accessibility" : "Accessibilité"
	  )
	: "";
const amenities_cyclist_card = document.getElementById("cyclist-card");

amenities_cyclist_card
	? createDecorCard(
			amenities_cyclist_card,
			"card decor-card cyclist",
			lang == "en" ? "Cyclist amenities" : "Aménagements pour les cyclistes"
	  )
	: "";

const amenities_safety_card = document.getElementById("safety-card");
amenities_safety_card
	? createDecorCard(
			amenities_safety_card,
			"card decor-card safety",
			lang == "en" ? "Safety & security" : "Sécurité et sûreté"
	  )
	: "";
const amenities_comfort_card = document.getElementById("comfort-card");

amenities_comfort_card
	? createDecorCard(
			amenities_comfort_card,
			"card decor-card comfort",
			lang == "en" ? "Comfort and convenience" : "Confort et commodité"
	  )
	: "";

document.addEventListener("DOMContentLoaded", () => {
	jsDisabled?.remove();
	const originalContent = h1Element.textContent; // Get the original text content

	if (section_stationLayout) {
		createSectionH2(
			lang == "en" ? "Station layout" : "Carte de la station",
			section_stationLayout
		);
	}
	if (section_explore) {
		createSectionH2(
			lang == "en" ? "Learn more" : "En savoir plus",
			section_explore
		);
	}
	/***********  Part 1 ***********/
	// Add the 'station-banner' class
	h1Element.classList.add("station-banner");
	// Wrap the existing content in a <span>
	h1Element.innerHTML = `<span class="station-banner__title">${originalContent}</span>`; // Wrap it in a <span>

	//add h2 titles to sections
	section_nearby
		? createSectionH2(
				lang == "en" ? "What's nearby" : "Que trouve-t-on à proximité?",
				section_nearby
		  )
		: "";
	section_amenities
		? createSectionH2(
				lang == "en" ? "Features & amenities" : "Aménagements",
				section_amenities
		  )
		: "";

	// Create the new elements
	const logo = document.createElement("img");
	logo.src =
		"https://www.octranspo.com/images/files/Network_Service_Change/O-heading-icon.png";
	logo.className = "logo";
	h1Element.prepend(logo.cloneNode(true));

	lang == "en"
		? (logo.alt = "OC Transpo logo")
		: (logo.alt = "french trans needed");

	const line1 = document.createElement("span");
	line1.className = "rt rt-type--line1";
	lang == "en"
		? (line1.innerHTML = `<span class="visuallyhidden">Line </span>1`)
		: (line1.innerHTML = `<span class="visuallyhidden">Ligne </span>1`);

	const line2 = document.createElement("span");
	line2.className = "rt rt-type--line2";
	lang == "en"
		? (line2.innerHTML = `<span class="visuallyhidden">Line </span>2`)
		: (line2.innerHTML = `<span class="visuallyhidden">Ligne </span>2`);

	const line3 = document.createElement("span");
	line3.className = "rt rt-type--line3";
	lang == "en"
		? (line3.innerHTML = `<span class="visuallyhidden">Line </span>3`)
		: (line3.innerHTML = `<span class="visuallyhidden">Ligne </span>3`);

	const line4 = document.createElement("span");
	line4.className = "rt rt-type--line4";
	lang == "en"
		? (line4.innerHTML = `<span class="visuallyhidden">Line </span>4`)
		: (line4.innerHTML = `<span class="visuallyhidden">Ligne </span>4`);

	const trainIcon = document.createElement("img");
	trainIcon.className = "inline-icon";
	lang == "en"
		? (trainIcon.alt = `O-Train station`)
		: (trainIcon.innerHTML = `Station de l'O-Train`);

	trainIcon.src =
		"https://www.octranspo.com/images/files/icons/transport_train-white.svg";

	const busIcon = document.createElement("img");
	busIcon.className = "inline-icon";
	lang == "en"
		? (busIcon.alt = `Transitway station`)
		: (busIcon.innerHTML = `Stations du transport en commun`);
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

			if (originalContent == "Template guide") {
				matchingStation = data.find(
					(station) => station.station_name == "Bayview"
				);
			}

			if (matchingStation) {
				// populate quicklinks
				if (quicklinks_container) {
					initializeQuickLinksSection(matchingStation);
				}

				// populate hero image
				if (matchingStation.station_url.hero_image) {
					createHeroBanner(matchingStation.station_url.hero_image);
				} else if (matchingStation.station_url.layout_map) {
					createHeroBanner("https://www.octranspo.com/images/files/maps/network_maps/rapidmap.png");
				}

				// populate 360 tour section
				if (section_360) {
					// Check if 360 url exists
					if (matchingStation.station_url.tour360) {
						// add in the h2 according to the page language
						createSectionH2(
							lang == "en" ? "360-Degree tour" : "Visite virtuelle",
							section_360
						);
						// call helper function to populate 360 section
						populate360Section(matchingStation.station_url.tour360);
					} else {
						// if 360 url DNE remove 360 section (if the section exists on page)
						section_360?.remove();
					}
				}

				// populate nearby map image
				if (matchingStation.station_url.nearby_map) {
					let nearby_map_url = matchingStation.station_url.nearby_map;
					let altText =
						lang == "en"
							? `Map of Places of interest within a 5-minute walk of ${matchingStation.station_name} Station`
							: `{Map of Places of interest within a 5-minute walk of ${matchingStation.station_name} Station} Sites d'intérêt à moins de 5 km`;

					//createFancyImageComponent function will have two variables: image src and alt text
					let nearby_map = createFancyboxContainer(nearby_map_url, altText);
					//add inline style to fancy image component flex=1 0 240px
					nearby_map.style.flex = "1 0 240px";
					//append to section_nearby component
					section_nearby?.prepend(nearby_map);
				}

				//insert station layout url to all stationLayoutMap elements by looping through and adding urls
				if (matchingStation.station_url.layout_map && stationLayoutMap) {
					for (let i = 0; i < stationLayoutMap.length; i++) {
						stationLayoutMap[
							i
						].src = `${matchingStation.station_url.layout_map}`;
						if (lang == "en") {
							stationLayoutMap[
								i
							].alt = `${matchingStation.station_name} Station layout`;
						} else {
							stationLayoutMap[
								i
							].alt = `Plan de la station ${matchingStation.station_name}`;
						}
					}
				}

				// place placeholder image if station layout map url DNE in json file
				if (
					matchingStation.station_url.layout_map == "" &&
					section_stationLayout
				) {
					for (let i = 0; i < stationLayoutMap.length; i++) {
						stationLayoutMap[i].src =
							"https://staging.octranspo1.com/images/files/test/placeholder.png";
					}
				}
				function getStationType(matchingStation, stationType) {
					// Check which lines or bus services the station belongs to and append the icons accordingly
					if (matchingStation.station_type.line_1 == true) {
						stationLines.appendChild(line1.cloneNode(true));
					}
					if (matchingStation.station_type.line_2 == true) {
						stationLines.appendChild(line2.cloneNode(true));
					}
					if (matchingStation.station_type.line_3 == true) {
						stationLines.appendChild(line3.cloneNode(true));
					}
					if (matchingStation.station_type.line_4 == true) {
						stationLines.appendChild(line4.cloneNode(true));
					}
				
					if (
						matchingStation.station_type.line_1 == true ||
						matchingStation.station_type.line_2 == true ||
						matchingStation.station_type.line_3 == true ||
						matchingStation.station_type.line_4 == true
					) {
						stationType.textContent =
							lang == "en" ? "O-Train station" : "Station de l'O-Train";
					} else {
						document.getElementById("station-lines-li")?.remove();
					}
					// Check if the station is in the bus station array and append the bus icon
					if (matchingStation.station_type.bus == true) {
						if (stationType.textContent) {
							stationType.textContent =
								lang == "en"
									? `${stationType.textContent} | Transit station`
									: `${stationType.textContent} | Stations du transport en commun`;
						} else {
							stationType.textContent =
								lang == "en"
									? "Transit station"
									: "Stations du transport en commun";
						}
					}
				
					return stationType
				}
				function styleStationBanner(h1Element, matchingStation) {
					// Check which lines or bus services the station belongs to and append the icons accordingly
					if (matchingStation.station_type.line_1 == true) {
						h1Element.appendChild(line1.cloneNode(true)); // Add Line 1 number
					}
					if (matchingStation.station_type.line_2 == true) {
						h1Element.appendChild(line2.cloneNode(true)); // Add Line 1 number
				
					}
					if (matchingStation.station_type.line_3 == true) {
						h1Element.appendChild(line3.cloneNode(true)); // Add Line 1 number
					}
					if (matchingStation.station_type.line_4 == true) {
						h1Element.appendChild(line4.cloneNode(true)); // Add Line 1 number
					}
				
					if (
						matchingStation.station_type.line_1 == true ||
						matchingStation.station_type.line_2 == true ||
						matchingStation.station_type.line_3 == true ||
						matchingStation.station_type.line_4 == true
					) {
						h1Element.appendChild(trainIcon.cloneNode()); // Add train icon
						if (section_trainBoarding) {
							createTrainBoardingInfoTable(matchingStation);
						}
					} else {
						document.getElementById("station-lines-li")?.remove();
					}
					// Check if the station is in the bus station array and append the bus icon
					if (matchingStation.station_type.bus == true) {
						h1Element.appendChild(busIcon.cloneNode()); // Add bus icon
					}
				}

				styleStationBanner(h1Element, matchingStation)
				getStationType(matchingStation, stationType)




			} else {
				console.error("No matching station found.");
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
				})
				.then(()=> {
					infoCard
					? createStationInfoCard(infoCard, lang, matchingStation, stationLines, stationRoutes, stationType): "";
				})

			// /***********  Part 3 ***********/
			// /* Add station status  */
		})
		// .catch((error) => console.error("Error fetching JSON:", error));

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
	sectionTitle.style.width = "100%";
	sectionTitle.style.gridColumn = "1/-1";
	section.insertAdjacentElement("beforebegin", sectionTitle);
}

// Container to which the anchor elements will be appended
function initializeQuickLinksSection(matchingStation) {
	let quickLinks = [];
	if (lang == "en") {
		quickLinks = [
			{
				id: `quicklinks-card_pnr`,
				href: ``,
				className: `card quick-link-card parking`,
				textContent: `Park & Ride`,
				titleAttr: `Learn more about parking at ${matchingStation.station_name} Station`,
			},
			{
				id: `quicklinks-card_schedules`,
				href: ``,
				className: `card quick-link-card schedules`,
				textContent: `Schedule`,
				titleAttr: `View ${matchingStation.station_name} Station schedule`,
			},
			{
				id: `quicklinks-card_station-layout`,
				href: `#layout`,
				className: `card quick-link-card map`,
				textContent: `Station layout`,
				titleAttr: `View ${matchingStation.station_name} Station layout`,
			},
			{
				id: `quicklinks-card_amenities`,
				href: `#amenities`,
				className: `card quick-link-card washroom`,
				textContent: `Amenities`,
				titleAttr: `View ${matchingStation.station_name} Station features & amenities`,
			},
			{
				id: `quicklinks-card_connections`,
				href: `#stops`,
				className: `card quick-link-card connection`,
				textContent: `Connections`,
				titleAttr: `View ${matchingStation.station_name} Station boarding locations`,
			},
			{
				id: `quicklinks-card_tour360`,
				href: `#360`,
				className: `card quick-link-card tour-360`,
				textContent: `360° tour`,
				titleAttr: `Explore ${matchingStation.station_name} Station with 360-Deg virtual tour`,
			},
			{
				id: `quicklinks-card_nearby`,
				href: `#nearby`,
				className: `card quick-link-card walk`,
				textContent: `Nearby`,
				titleAttr: `Explore what's nearby ${matchingStation.station_name} Station`,
			},
			{
				id: `quicklinks-card_explore`,
				href: `#explore`,
				className: `card quick-link-card sparkle`,
				textContent: `Learn more`,
				titleAttr: `Learn more about ${matchingStation.station_name} Station`,
			},
		];
	}
	if (lang == "fr") {
		quickLinks = [
			{
				id: `quicklinks-card_pnr`,
				href: ``,
				className: `card quick-link-card parking`,
				textContent: `Parc relais`,
				titleAttr: `{Learn more about parking at the station}`,
			},
			{
				id: `quicklinks-card_schedules`,
				href: ``,
				className: `card quick-link-card schedules`,
				textContent: `Schedule`,
				titleAttr: `{View ${matchingStation.station_name} station schedule}`,
			},
			{
				id: `quicklinks-card_station-layout`,
				href: `#carte`,
				className: `card quick-link-card map`,
				textContent: `Carte de la station`,
				titleAttr: `Voir la carte de la station ${matchingStation.station_name}`,
			},
			{
				id: `quicklinks-card_amenities`,
				href: `#amenagements`,
				className: `card quick-link-card washroom`,
				textContent: `Aménagements`,
				titleAttr: `Voir les amenagements de la station ${matchingStation.station_name}`,
			},
			{
				id: `quicklinks-card_connections`,
				href: `#arret`,
				className: `card quick-link-card connection`,
				textContent: `Arrêts`,
				titleAttr: `Consulter les arrêts et les services de bus dans la station ${matchingStation.station_name}`,
			},
			{
				id: `quicklinks-card_tour360`,
				href: `#360`,
				className: `card quick-link-card tour-360`,
				textContent: `Visite virtuelle`,
				titleAttr: `Visiter virtuelles la station ${matchingStation.station_name}`,
			},
			{
				id: `quicklinks-card_nearby`,
				href: `#proximite`,
				className: `card quick-link-card walk`,
				textContent: `À proximité`,
				titleAttr: `voir ce qu'il y a à proximité`,
			},
			{
				id: `quicklinks-card_explore`,
				href: `#savoir`,
				className: `card quick-link-card sparkle`,
				textContent: `En savoir plus`,
				titleAttr: `{Learn more about the station}`,
			},
		];
	}

	quickLinks.forEach((link) => {
		let linkedTo = link.href.replace("#", "");
		if (
			document.getElementById(linkedTo) ||
			link.id == "quicklinks-card_schedules" ||
			link.id == "quicklinks-card_pnr"
		) {
			const anchorElement = createQuickLinkCardElement(
				link.id,
				link.href,
				link.className,
				link.textContent,
				link.titleAttr
			);
			checkConditionToAppendQuickLinkElement(
				anchorElement,
				link,
				matchingStation
			);
		}
	});
}

//Function to check and appendning Quick link card elemt
function checkConditionToAppendQuickLinkElement(
	anchorElement,
	link,
	matchingStation
) {
	// Only create PnR quicklink card if stations has a parking lot
	if (link.id == "quicklinks-card_pnr" && matchingStation.station_url.pnr) {
		let fullPnrUrl = "";
		if (lang == "en") {
			fullPnrUrl = `/our-services/park-ride/${matchingStation.station_url.pnr}`;
		} else {
			fullPnrUrl = `/nos-services/parcs-o-bus/${matchingStation.station_url.pnr}`;
		}
		anchorElement.href = fullPnrUrl;
		quicklinks_container?.appendChild(anchorElement);
	}

	//Only create SCHEDULES quicklink card if station has schedules link
	if (
		link.id == "quicklinks-card_schedules" &&
		matchingStation.station_url.schedules
	) {
		anchorElement.href = matchingStation.station_url.schedules;
		quicklinks_container?.appendChild(anchorElement);
	}

	// Always create station layout section
	if (link.id == "quicklinks-card_station-layout") {
		quicklinks_container?.appendChild(anchorElement);
	}

	//Only create AMENITIES quicklink card if station has amenities section
	if (section_amenities && link.id == "quicklinks-card_amenities") {
		quicklinks_container?.appendChild(anchorElement);
	}

	//Only create Connections quicklink card if page has section with id="stops"
	if (
		document.getElementById("stops") &&
		link.id == "quicklinks-card_connections"
	) {
		quicklinks_container?.appendChild(anchorElement);
	}

	//Only create 360 quicklink card if station has 360-tour url
	if (
		matchingStation.station_url.tour360 &&
		link.id == "quicklinks-card_tour360"
	) {
		quicklinks_container?.appendChild(anchorElement);
	}

	// No condition for NEARBY or EXPLORE
	if (link.id == "quicklinks-card_explore") {
		quicklinks_container?.appendChild(anchorElement);
	}
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

function reOrderTable(table) {
	// Create a new table and copy caption and thead
	const newTable = document.createElement("table");
	newTable.className = table.className;

	const caption = table.querySelector("caption");
	if (caption) newTable.appendChild(caption.cloneNode(true));

	const thead = table.querySelector("thead");
	if (thead) newTable.appendChild(thead.cloneNode(true));

	// Create and populate new tbody with sorted rows
	const newTbody = document.createElement("tbody");
	const tbody = table.querySelector("tbody");
	if (tbody) {
		const rows = Array.from(tbody.querySelectorAll("tr"));
		rows.sort((rowA, rowB) => {
			const valueA = rowA.querySelector("td").textContent.trim();
			const valueB = rowB.querySelector("td").textContent.trim();
			const numA = parseFloat(valueA) || 0; // Convert to number or default to 0
			const numB = parseFloat(valueB) || 0; // Convert to number or default to 0
			return numA - numB; // Numeric comparison
		});
		rows.forEach((row) => newTbody.appendChild(row.cloneNode(true)));
	}

	newTable.appendChild(newTbody);
	return newTable;
}

function createTrainBoardingInfoTable(station) {
	// Create the table element
	let table = document.createElement("table");
	table.className = "light boarding-locations";

	// Create the caption
	const caption = document.createElement("caption");
	lang == "en"
		? (caption.textContent = "Train platforms")
		: (caption.textContent = "french translation for {Train platforms}");

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

	table = reOrderTable(table);
	console.log(table);

	// Add the table to the DOM (e.g., in a specific container)
	section_trainBoarding.appendChild(table);

	if (
		station.station_type.line_2 == true ||
		station.station_type.line_4 == true
	) {
		let noteText =
			lang == "en"
				? "Line 2 and Line 4 will open on [date]"
				: "French translation needed {Line 2 and Line 4 will open on [date]}";
		section_trainBoarding.appendChild(createInfoNote(noteText));
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

function checkPageLanguage() {
	currentUrl = window.location.href;

	if (currentUrl.indexOf("/fr/") == -1) {
		return "en";
	} else {
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

	// Create header row with "Route" and "Stop Name" (only once)
	let headerRow = document.createElement("tr");

	let row_routeHeader = document.createElement("th");
	row_routeHeader.textContent = "Route";
	headerRow.appendChild(row_routeHeader);

	let row_stopNameHeader = document.createElement("th");
	row_stopNameHeader.textContent = "Stop Name";
	headerRow.appendChild(row_stopNameHeader);

	lang == "en"
		? (caption.textContent = "New Ways to Bus boarding locations")
		: (caption.textContent =
				"French translation for {New Ways to Bus boarding locations}");

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
		table = reOrderTable(table);
		section_busBoardingLocations.appendChild(table);
		let noteText =
			lang == "en"
				? "New Ways to Bus bus service will begin [date]"
				: "French translation needed {New Ways to Bus bus service will begin [date]}";
		section_busBoardingLocations.appendChild(createInfoNote(noteText));
		table.className = "light boarding-locations";
		// tbody.className = "grid--3col";
		stationRoutes = buildRouteListParagraph(tbody);
	}
	if (tbody.innerHTML == "") {
		section_busBoardingLocations?.remove();
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

	stationRoutes.appendChild(title);
	stationRoutes.appendChild(routeListParagraph);

	return stationRoutes;
	// appendListItem(cardBody, title, content);
}
function createStationInfoCard(infoCard, lang, matchingStation, lines, routes, stationType) {
	// Add the card and station-info-card classes to the div
	infoCard.classList.add("card", "station-info-card");

	// Create the title div
	const cardTitle = document.createElement("div");
	cardTitle.id = "station-info-card-title";
	cardTitle.classList.add("card__title");

	lang == "en"
		? (cardTitle.textContent = "Station Information")
		: (cardTitle.textContent = "{french trans needed}");

	// Create the ul for the body
	const cardBody = document.createElement("ul");
	cardBody.id = "station-info-card-body";
	cardBody.classList.add("card__body");

	// Append the title and body to the info card
	infoCard.appendChild(cardTitle);
	infoCard.appendChild(cardBody);

	//if 560 exists, add 560 to station info card
	let basicStationInfo = document.createElement("div");
	let no560 = document.createElement("p");
	if (matchingStation.station_560) {
		no560.innerHTML =
			lang == "en"
				? `560#: <strong>${matchingStation.station_560}</strong>`
				: `n<sup>o</sup>560: <strong>${matchingStation.station_560}</strong>`;
	}

	no560.textContent ? basicStationInfo.appendChild(no560) : "";
	stationType.textContent ? basicStationInfo.appendChild(stationType) : "";
	//

	if (basicStationInfo.innerText) {
		appendListItem(cardBody, "", basicStationInfo);
	}
	//if address exists
	let address = document.createElement("a");
	let accessPoint = document.createElement("p");

	if (
		matchingStation.station_location.address &&
		matchingStation.station_location.google_link
	) {
		address.textContent = matchingStation.station_location.address;
		address.href = matchingStation.station_location.google_link;
	}
	if (matchingStation.station_location.access_point) {
		accessPoint.textContent = matchingStation.station_location.access_point;
	} else {
		accessPoint.textContent = "";
	}
	let location = document.createElement("div");
	address.textContent ? location.appendChild(address) : "";
	accessPoint.textContent ? location.appendChild(accessPoint) : "";

	if (location.textContent != "") {
		appendListItem(cardBody, "", location);
	}

	if (lines.textContent != "") {
		let title = document.createElement("p");
		title.textContent =
			lang == "en" ? "O-Train Lines: " : "Lignes de l'O-Train";
		appendListItem(cardBody, title, lines);
	}
	if (routes) {
		appendListItem(cardBody, "", routes);
	}
}

function appendListItem(cardBody, title, content) {
	let item = document.createElement("li");
	cardBody?.appendChild(item);
	if (title != "") item.append(title);
	item.append(content);
}

function transformPtoUL(p) {
	console.log(p);
	const items = p.split("\n").map((item) => item.trim());
	const ul = document.createElement("ul");

	// Loop through the items and create list elements
	items.forEach((text) => {
		const li = document.createElement("li");
		li.textContent = text;
		li.textContent == "" ? "" : ul.appendChild(li);
	});

	return ul;
}

function createDecorCard(card, classList, title) {
	const cardDiv = document.createElement("div");
	card.className = classList;

	// Create the <h4> element for the title
	const titleElement = document.createElement("h4");
	titleElement.classList.add("card__title");
	titleElement.textContent = title;

	// Append the <h4> title to the new <div>

	let listItems = transformPtoUL(card.textContent);
	card.innerHTML = "";
	card.appendChild(titleElement);

	// Append the <ul> to the new <div>
	cardDiv.appendChild(card.cloneNode(true));

	// Insert the new <div> before the original <ul>
	card.appendChild(listItems);
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
	ulElement?.remove();
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

	let listItems = [
		"<strong>Easy navigation:</strong> Simply use your mouse to explore the interior of the station. Change floors effortlessly by clicking on the 'Station Level guide' located at the bottom left.",
		"<strong>Discover station Features:</strong> Click on the red and white ‘O’ buttons scattered around the station for detailed information about its features.",
		"<strong>Tour date:</strong> Note that this tour was recorded in 2024. Any fencing visible in the tour has now been removed.",
		"<strong>Loading time:</strong> After pressing 'Play', please wait momentarily for the tour to load completely for an uninterrupted experience.",
	];

	if (lang == "fr") {
		listItems = [
			"<strong>Navigation facile :</strong> Utilisez simplement votre souris pour explorer l'intérieur de la station. Changez d'étage facilement en cliquant sur le « Guide des niveaux de la station » situé en bas à gauche.</li>",
			"<strong>Découvrez les fonctionnalités de la station :</strong> Cliquez sur les boutons rouges et blancs en forme de « O » dispersés autour de la station pour obtenir des informations détaillées sur ses fonctionnalités.</li>",
			"<strong>Date de la visite :</strong> Notez que cette visite a été enregistrée en mars 2019. Toutes les clôtures visibles dans la visite ont maintenant été retirées.</li>",
			"<strong>Temps de chargement :</strong> Après avoir appuyé sur « Lire », veuillez patienter un instant pour que la visite se charge complètement afin de profiter d'une expérience ininterrompue.</li>",
		];
	}

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
	const figure = document.createElement("figure");
	const figcaption = document.createElement("figcaption");

	figcaption.textContent = altText;

	fancyboxContainer.className = "fancybox-media";
	fancyboxContainer.href = url;
	fancyboxContainer.title = altText;

	// Create image element with attributes
	const imgElement = document.createElement("img");
	imgElement.src = url;
	imgElement.alt = altText;

	// Append the image to the anchor
	fancyboxContainer.appendChild(imgElement);
	figure.appendChild(fancyboxContainer);
	figure.appendChild(figcaption);
	return figure;
}

function transformExploreSection() {
	// Create and add the h2 element for the title

	// Create a new div to wrap the paragraphs
	const aboutDiv = document.createElement("div");
	aboutDiv.id = "station-about";

	// Move all paragraphs into the new div
	const paragraphs = section_explore.querySelectorAll("p");
	paragraphs.forEach((p) => {
		aboutDiv?.appendChild(p);
	});

	// Insert the div back into the section before the ul
	const quickFacts = section_explore.querySelector("ul#station-quickfacts");
	section_explore?.insertBefore(aboutDiv, quickFacts);

	// Create a new div to wrap the quick facts
	const quickFactsDiv = document.createElement("div");
	quickFactsDiv.classList.add("quick-facts", "banner");

	// Create and add the h3 element for the quick facts title
	const factsTitle = document.createElement("h3");
	factsTitle.textContent =
		lang == "en"
			? "Station facts & updates"
			: "French translation for {Station facts & updates}";
	quickFactsDiv?.appendChild(factsTitle);

	// Move the ul inside the quick facts div
	quickFactsDiv?.appendChild(quickFacts);

	// Replace the original ul with the modified quick facts div
	section_explore?.appendChild(quickFactsDiv);

	// Update the list items with the proper classes (update or fact)
	const listItems = quickFacts.querySelectorAll("li");
	listItems.forEach((li) => {
		if (li.textContent.startsWith("UPDATE")) {
			li.classList.add("update");
			li.textContent = li.textContent.replace("UPDATE", "").trim();
		} else if (li.textContent.startsWith("FACT")) {
			li.classList.add("fact");
			li.textContent = li.textContent.replace("FACT", "").trim();
		}
	});
	addCardTags();
}

function addCardTags() {
	// Select all list items
	const listItems = document.querySelectorAll("li.update, li.fact");
	listItems.forEach((item) => {
		// Determine the type (update or quick fact)
		const isUpdate = item.classList.contains("update");
		const tagText = isUpdate
			? lang == "en"
				? "Update"
				: "Mise à jour"
			: lang == "en"
			? "Quick facts"
			: "Faits en bref";
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
	line.innerHTML =
		lang === "en"
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
appendSectionHeader(
	"line1Stns",
	"Line 1 stations",
	trainIcon.cloneNode(true),
	createLineIcon(1, lang)
);
appendSectionHeader(
	"future_line1Stns",
	"Future Line 1 stations",
	trainIcon.cloneNode(true),
	createLineIcon(1, lang)
);
appendSectionHeader(
	"line2Stns",
	"Line 2 stations",
	trainIcon.cloneNode(true),
	createLineIcon(2, lang)
);
appendSectionHeader(
	"line3Stns",
	"Line 3 stations",
	trainIcon.cloneNode(true),
	createLineIcon(3, lang)
);
appendSectionHeader(
	"future_line3Stns",
	"Future Line 3 stations",
	trainIcon.cloneNode(true),
	createLineIcon(3, lang)
);
appendSectionHeader(
	"line4Stns",
	"Line 4 stations",
	trainIcon.cloneNode(true),
	createLineIcon(4, lang)
);
appendSectionHeader("busStns", "Transit Stations", busIcon.cloneNode(true), "");

fetch("/data/stations.json")
	// fetch("/images/files/data/stations.json")
	.then((response) => response.json())
	.then((stations) => {
		populateStationSections(stations);
	});

function populateStationSections(stations) {
	// Loop through each station in the stations array
	stations.forEach((station) => {
		// Check if the station belongs to Line 1
		if (station.station_completed.line_1 == true) {
			addStationToSection("line1Stns", station);
		} else if (station.station_completed.line_1 == false) {
			addStationToSection("future_line1Stns", station);
		}

		// Check if the station belongs to Line 2
		if (station.station_completed.line_2 == true) {
			addStationToSection("line2Stns", station);
		}

		// Check if the station belongs to Line 3
		if (station.station_completed.line_3 == true) {
			addStationToSection("line3Stns", station);
		} else if (station.station_completed.line_3 == false) {
			addStationToSection("future_line3Stns", station);
		}

		// Check if the station belongs to Line 4
		if (station.station_completed.line_4 == true) {
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
		stationA.href = station.station_url.staging;

		// Populate the div with the station's information and icons
		stationA.innerHTML = `
                <div class="name">
                    <p>${station.station_name}</p>
                </div>
            `;

		// Check station features (train connections, pnr, accessible... etc)
		const lineIcons = checkStationFeatures(station, lang);

		// Append the line icons to the stationDiv
		lineIcons.forEach((icon) => stationA.appendChild(icon));

		// Append the stationDiv to the section
		section.querySelector(".select-options-grid").appendChild(stationA);
	}
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
		lineIcons.push(createIconElement("service_pnr", "Park & Ride station"));
	}
	return lineIcons;
}

function createHeroBanner(url) {
	// Get the station-hero-banner div
	const heroBanner = document.getElementById("station-hero-banner");

	// Add the hero-banner class to the div
	heroBanner.classList.add("hero-banner");

	// Create the img element
	const heroImg = document.createElement("img");

	// Set the id and style with background-image for the img element
	heroImg.id = "station-hero-img";
	heroImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${url})`;

	// Append the img to the hero-banner div
	heroBanner.appendChild(heroImg);
}

function createLayout(section, layoutClass) {
	// Get the section element

	// Create a new div with the layoutClass (e.g., 'grid--3col')
	const layoutDiv = document.createElement("div");
	layoutDiv.className = layoutClass;

	// Move all elements inside the section to the new layout div
	while (section.firstChild) {
		layoutDiv.appendChild(section.firstChild);
	}

	// Append the layout div back into the section element
	section.appendChild(layoutDiv);
}
