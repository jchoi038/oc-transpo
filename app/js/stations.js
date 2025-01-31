const lang = checkPageLanguage(window.location.href);
const site = checkSite(window.location.href);
const page = checkPage(window.location.href);

// const logo = document.createElement("img");
// logo.src =
// 	"https://www.octranspo.com/images/files/Network_Service_Change/O-heading-icon.png";
// logo.className = "logo";
// h1Element.prepend(logo.cloneNode(true));
// lang == "en"
// 	? (logo.alt = "OC Transpo logo")
// 	: (logo.alt = "french trans needed");

var quicklinks_container = document.getElementById("quicklinks-container");
var selectOptionType = document.createElement("p");
selectOptionType.textContent.textContent = "";
var infoCard = document.getElementById("station-info-card");
const station560 = document.getElementById("station560");
var stationLines = document.createElement("div");
var futureStationLines = document.createElement("div");
var stationRoutes = document.createElement("div");
var stationLayoutMap = document.getElementsByClassName("station-layout-map");
var section_busBoardingLocations = document.getElementById("bus-boarding-info");
var trainStation;
createHeroBanner();

// /*delete this line for nwtb launch*/if (section_busBoardingLocations) {section_busBoardingLocations.className = "nwtb-launch"}

var section_trainBoarding = document.getElementById("train-boarding-info");
var jsDisabled = document.getElementById("js-disabled");

// delete line about js
var jsDisabled = document.getElementById("js-disabled");
jsDisabled?.remove();

// get all page main sections
var section_stationLayout = document.getElementById("layout");
var section_amenities = document.getElementById("amenities");
var section_stops = document.getElementById("stops");
var section_nearby = document.getElementById("nearby");
var section_360 = document.getElementById("360");
var section_explore = document.getElementById("explore");

// build Back to top button

// Create the new elements

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
	? (line3.innerHTML = `<span class="visuallyhidden">Future Line </span>3`)
	: (line3.innerHTML = `<span class="visuallyhidden">Future Ligne </span>3`);

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
lang == "en" ? (busIcon.alt = `Bus`) : (busIcon.innerHTML = `Autobus`);
busIcon.src =
	"https://www.octranspo.com/images/files/icons/transport_bus-white.svg";

if (page == "station") {
	// Initialize variables
	const h1Element = document.querySelector("h1");
	// Apply generic station styles

	h1Element.classList.add("station-banner");
	const h1StationName = h1Element.textContent.replace("’", "'"); // Get the original text content
	h1Element.innerHTML = `<span class="station-banner__title">${h1StationName}</span>`; // Wrap it in a <span>

	// IF french page, translate section ids
	if (lang == "fr") {
		section_stationLayout.id = "carte";
		section_amenities.id = "amenagements";
		section_stops.id = "arret";
		section_nearby.id = "proximite";
		section_360.id = "360";
		section_explore.id = "savoir";
	}

	/***********  Part 1 ***********/

	fetch("/data/stations.json")
		// fetch("/images/files/data/stations.json")
		.then((response) => response.json())
		.then((data) => {
			let matchingStation = data.find(
				(station) =>
					station.station_name == h1StationName ||
					station.station_name_fr == h1StationName
			);

			// stationRoutes = getStationRoutes(matchingStation)

			if (h1StationName == "Template guide") {
				matchingStation = data.find(
					(station) => station.station_name == "Bayview"
				);
			}

			if (matchingStation) {
				// populate hero image
				if (matchingStation.station_url.hero_image) {
					let url = matchingStation.station_url.hero_image;
					let img = document.getElementById("station-hero-img");
					img.style.backgroundImage = `url(${url})`;
				} else {
					// TBD
				}
				/***********  Part n ***********/
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
					.then(() => {
						infoCard
							? buildStationInfoCard(
									infoCard,
									lang,
									matchingStation,
									stationLines,
									futureStationLines,
									selectOptionType
							  )
							: "";
					});

				// populate quicklinks
				if (quicklinks_container) {
					initializeQuickLinksSection(matchingStation);
				}

				// populate 360 tour section
				if (section_360) {
					section_360.className = "section";
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
							: `{Map of Places of interest within a 5-minute walk of ${matchingStation.station_name} Station} Sites d'intÃ©rÃªt Ã  moins de 5 km`;

					//createFancyImageComponent function will have two variables: image src and alt text
					let nearby_map = createFancyboxContainer(nearby_map_url, altText);
					//add inline style to fancy image component flex=1 0 240px
					nearby_map.style.flex = "1 0 240px";
					//append to section_nearby component
					section_nearby?.prepend(nearby_map);
				}

				// populate image gallery
				if (matchingStation.station_url.image_gallery) {
					populateImageGallery(matchingStation.station_url.image_gallery);
				}

				//insert station layout to station layout section
				if (matchingStation.station_url.layout_map) {
					let figure = document.createElement("figure");
					let figcaption = document.createElement("figcaption");
					let layoutImg = document.createElement("img");
					layoutImg.setAttribute("id", "zoomPanObj");
					figcaption.innerHTML =
						lang == "en"
							? `Station layout map for ${matchingStation.station_name} Station. <a class="download-link" target="_blank" href="${matchingStation.station_url.layout_map}">Download map</a>`
							: `Plan de la station ${matchingStation.station_name_fr}`;
					layoutImg.alt = `${matchingStation.station_name} Station layout`;
					layoutImg.src = matchingStation.station_url.layout_map;
					figure.replaceChildren(layoutImg, figcaption);
					section_stationLayout.replaceChildren(section_stops, figure);
				} else {
					// remove layout section
					section_stationLayout.remove();
					document.getElementById("quicklinks-card_station-layout").remove();
				}

				if (
					matchingStation.station_type.line_1 == true ||
					matchingStation.station_type.line_2 == true ||
					matchingStation.station_type.line_3 == true ||
					matchingStation.station_type.line_4 == true
				) {
					trainStation = true;
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
						trainStation = true;
						h1Element.appendChild(trainIcon.cloneNode()); // Add train icon
						if (section_trainBoarding) {
							section_trainBoarding.style.width = "100%";
							createTrainBoardingInfoTable(matchingStation);
						}
					} else {
						document.getElementById("station-lines-li")?.remove();
					}
					// Check if the station is in the bus station array and append the bus icon
					if (matchingStation.station_type.transitway == true) {
						h1Element.appendChild(busIcon.cloneNode()); // Add bus icon
					}
				}
				styleStationBanner(h1Element, matchingStation);
				getStationType(matchingStation, selectOptionType);

				if (section_amenities) {
					console.log(trainStation);
					buildAmenitiesSection(section_amenities, trainStation);
				}
			} else {
				console.error("No matching station found.");
			}
		});
	/*** Build foundations for major sections  IF the section exists***/

	function buildAmenitiesSection(section_amenities, matchingStation) {
		section_amenities.className = "section flex cards-overflow-x-container";
		createSectionH2(
			lang == "en" ? "Features & amenities" : "Am&eacute;nagements",
			section_amenities
		);

		const faresDefaults = trainStation ?
			`Ticket machines with video chat help
			Fare gates at the station entrance` : "";

		const navigationDefaults = trainStation ?
			`Clear signage and wayfinding
			Illuminated “O” pylon and lantern box
			Service maps
			Free OC Info phone for trip planning help and answers to all your questions
			Map of nearby destinations (within walking distance)` : "";
		const accessibilityDefaults = trainStation ?
			`Audible and visual announcements
			Tactile wayfinding tiles & platform edge indicator strips
			Braille/tactile signage` : "";
		const safetyDefaults = trainStation ?
			`Transecure waiting area
			Emergency phones
			Platform edge indicator strips
			Video camera monitoring` : "";

		const amenities_faresMadeEasy_card = document.getElementById(
			"fares-made-easy-card"
		);

		amenities_faresMadeEasy_card
			? createDecorCard(
					amenities_faresMadeEasy_card,
					"card decor-card fares-made-easy",
					lang == "en" ? "Fares made easy" : "Paiement facile",
					faresDefaults
			  )
			: "";

		const amenities_wayfinding_card =
			document.getElementById("wayfinding-card");

		amenities_wayfinding_card
			? createDecorCard(
					amenities_wayfinding_card,
					"card decor-card wayfinding",
					lang == "en"
						? "Navigation and wayfinding"
						: "D&eacute;placement et orientation",
					navigationDefaults
						
			  )
			: "";
		const amenities_accessibility_card =
			document.getElementById("accessibiliy-card");
		amenities_accessibility_card
			? createDecorCard(
					amenities_accessibility_card,
					"card decor-card accessibility",
					lang == "en" ? "Accessibility" : "Accessibilit&eacute;",
					accessibilityDefaults
			  )
			: "";
		const amenities_cyclist_card = document.getElementById("cyclist-card");

		amenities_cyclist_card
			? createDecorCard(
					amenities_cyclist_card,
					"card decor-card cyclist",
					lang == "en"
						? "Cyclist amenities"
						: "Am&eacute;nagements pour les cyclistes"
			  )
			: "";

		const amenities_safety_card = document.getElementById("safety-card");
		amenities_safety_card
			? createDecorCard(
					amenities_safety_card,
					"card decor-card safety",
					lang == "en"
						? "Safety & security"
						: "S&eacute;curit&eacute; et s&ucirc;ret&eacute;",
					safetyDefaults
			  )
			: "";
		const amenities_comfort_card = document.getElementById("comfort-card");

		amenities_comfort_card
			? createDecorCard(
					amenities_comfort_card,
					"card decor-card comfort",
					lang == "en"
						? "Comfort and convenience"
						: "Confort et commodit&eacute;"
			  )
			: "";
	}

	if (quicklinks_container) {
		quicklinks_container.className = "grid grid-5-4-2-2";
	}

	if (section_stationLayout) {
		buildStationLayoutSectionLayout();
	}

	if (section_stops) {
		buildStopsSectionLayout();
	}

	if (section_nearby) {
		section_nearby.className = "flex section";
		createSectionH2(
			lang == "en" ? "What's nearby" : "&Agrave; proximit&eacute;",
			section_nearby
		);

		const nearby_within5km_card = document.getElementById("within-5km-card");
		nearby_within5km_card
			? createDecorCard(
					nearby_within5km_card,
					"card decor-card within-5km navy",
					lang == "en"
						? "Places of interest within 5 min"
						: "Sites d'intérêt à moins de 5 minutes",
					""
			  )
			: "";
		const nearby_alsoNearby_card = document.getElementById("also-nearby-card");
		nearby_alsoNearby_card
			? createDecorCard(
					nearby_alsoNearby_card,
					"card decor-card nearby blue",
					lang == "en" ? "Also close-by" : "Aussi à proximité",
					""
			  )
			: "";
	}

	if (section_explore) {
		section_explore.className = "section";
		createSectionH2(
			lang == "en" ? "Learn more" : "En savoir plus",
			section_explore
		);
		buildExploreSection();
		addCardTags();
	}

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

	function createSectionH2(title, section) {
		let sectionTitle = document.createElement("h2");
		sectionTitle.innerHTML = title;
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
					id: `quicklinks-card_connections`,
					href: `#stops`,
					className: `card quick-link-card connection`,
					textContent: `Connections`,
					titleAttr: `View ${matchingStation.station_name} Station boarding locations`,
				},
				{
					id: `quicklinks-card_amenities`,
					href: `#amenities`,
					className: `card quick-link-card washroom`,
					textContent: `Features`,
					titleAttr: `View ${matchingStation.station_name} Station features & amenities`,
				},
				{
					id: `quicklinks-card_nearby`,
					href: `#nearby`,
					className: `card quick-link-card walk`,
					textContent: `Nearby`,
					titleAttr: `Explore what's nearby ${matchingStation.station_name} Station`,
				},
				{
					id: `quicklinks-card_tour360`,
					href: `#360`,
					className: `card quick-link-card tour-360`,
					textContent: `360-Deg tour`,
					titleAttr: `Explore ${matchingStation.station_name} Station with 360-Deg virtual tour`,
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
					titleAttr: `{View ${matchingStation.station_name_fr} station schedule}`,
				},
				{
					id: `quicklinks-card_station-layout`,
					href: `#carte`,
					className: `card quick-link-card map`,
					textContent: `Carte de la station`,
					titleAttr: `Voir la carte de la station ${matchingStation.station_name_fr}`,
				},
				{
					id: `quicklinks-card_amenities`,
					href: `#amenagements`,
					className: `card quick-link-card washroom`,
					textContent: `Am&eacute;nagements`,
					titleAttr: `Voir les aménagements de la station ${matchingStation.station_name_fr}`,
				},
				{
					id: `quicklinks-card_connections`,
					href: `#arret`,
					className: `card quick-link-card connection`,
					textContent: `Service et arr&ecirc;ts`,
					titleAttr: `Consulter les arrêts et les services de bus dans la station ${matchingStation.station_name_fr}`,
				},
				{
					id: `quicklinks-card_tour360`,
					href: `#360`,
					className: `card quick-link-card tour-360`,
					textContent: `Visite virtuelle`,
					titleAttr: `Visiter virtuelles la station ${matchingStation.station_name_fr}`,
				},
				{
					id: `quicklinks-card_nearby`,
					href: `#proximite`,
					className: `card quick-link-card walk`,
					textContent: `&Agrave; proximit&eacute;`,
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
		if (section_stops && link.id == "quicklinks-card_connections") {
			quicklinks_container?.appendChild(anchorElement);
		}

		//Only create AMENITIES quicklink card if station has Nearby section
		if (section_nearby && link.id == "quicklinks-card_nearby") {
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
		span.innerHTML = textContent;

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
				case "EXP":
					route_icon = "E1";
					break;
				case "B2":
					route_icon = "B2";
					break;
				case "ROW":
					route_icon = "R1";
					break;
				case "R2":
					route_icon = "R2";
					break;
				case "R3":
					route_icon = "R3";
					break;
				case "R4":
					route_icon = "R4";
					break;
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
			stopName.innerHTML = stop;
			// .replace(`${stationName.toUpperCase()} `, "")
			// .replace("(", "")
			// .replace(")", "");
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
				const valueA = rowA
					.querySelector("td")
					.textContent.trim()
					.replace("N", "");
				const valueB = rowB
					.querySelector("td")
					.textContent.trim()
					.replace("N", "");
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
		// const h3 = document.createElement("h3");
		// caption.appendChild(h3)
		lang == "en"
			? (caption.textContent = "Train boarding locations")
			: (caption.textContent = "{Train boarding locations}");

		table.appendChild(caption);

		// Create the table body
		const tbody = document.createElement("tbody");
		// tbody.className = "grid--2col";

		// Loop through the stations and create rows

		if (station.station_type.line_1 && !station.station_extension) {
			if (station.station_name != "Tunney's Pasture") {
				addRow(tbody, "Tunney's Pasture", "line1", "1", "West");
			}
			if (station.station_name != "Blair") {
				addRow(tbody, "Blair", "line1", "1", "East");
			}
		}

		if (lang == "en") {
			if (station.station_type.line_2) {
				if (
					station.station_name == "Carleton" ||
					station.station_name == "Leitrim" ||
					station.station_name == "Bowesville"
				) {
					addRow(tbody, "Bayview", "line2", "2", "North");
					addRow(tbody, "Limebank", "line2", "2", "South");
				} else if (station.station_name == "Bayview") {
					console.log("creating train table");
					// addRow(tbody, "Bayview", "line2", "2", "South 1");
					addRow(tbody, "Limebank", "line2", "2", "South 2");
					addRow(tbody, "Limebank", "line2", "2", "South 1");
				} else if (station.station_name == "Limebank") {
					addRow(tbody, "Bayview", "line2", "2", "North 1");
					addRow(tbody, "Limebank", "line2", "2", "North 2");
				} else if (station.station_name == "South Keys") {
					addRow(tbody, "Bayview", "line2", "2", "North 1");
					addRow(tbody, "Limebank", "line2", "2", "South 2");
				} else if (
					station.station_name == "Dow's Lake" ||
					station.station_name == "Mooney's Bay" ||
					station.station_name == "Walkley" ||
					station.station_name == "Greenboro"
				) {
					addRow(tbody, "Bayview", "line2", "2", "All Trains (single track)");
				}
			}

			if (station.station_type.line_4 && station.station_name != "Airport") {
				addRow(tbody, "Airport", "line4", "4", "Airport");
			}
			if (station.station_type.line_4 && station.station_name != "South Keys") {
				addRow(tbody, "South Keys", "line4", "4", "South Keys");
			}
		}
		if (lang == "fr") {
			if (
				station.station_type.line_1 &&
				station.station_name != "Tunney's Pasture"
			) {
				addRow(tbody, "Tunney's Pasture", "line1", "1", "Ouest");
			}
			if (station.station_type.line_1 && station.station_name != "Blair") {
				addRow(tbody, "Blair", "line1", "1", "Est");
			}
			if (station.station_type.line_2 && station.station_name != "Limebank") {
				addRow(tbody, "Limebank", "line2", "2", "Sud");
			}
			if (station.station_type.line_2 && station.station_name != "Bayview") {
				addRow(tbody, "Bayview", "line2", "2", "Nord");
			}
			if (station.station_type.line_4 && station.station_name != "Airport") {
				addRow(tbody, "Aéroport", "line4", "4", "Aéroport");
			}
			if (station.station_type.line_4 && station.station_name != "South Keys") {
				addRow(tbody, "South Keys", "line4", "4", "South Keys");
			}
		}

		// Append the tbody to the table
		if (tbody.innerHTML != "") {
			table.appendChild(tbody);
			table = reOrderTable(table);
			section_trainBoarding.appendChild(table);
		}

		if (station.station_extension && station.station_type.line_1) {
			const note = document.createElement("div");
			note.innerHTML =
				lang == "en"
					? `
			<div class="note note__type--info">
				<p class="note__title">This is a future O-Train Line <span class="rt rt-type--line1">1</span> ${
					station.station_extension == "west" ? "West" : "East"
				}  Extension station</p>
				<div class="note__desc">
					<p>${
						station.station_extension == "west" ? "West" : "Line 1 East"
					} Extension is coming in  ${
							station.station_extension == "west" ? "2026" : "2025"
					  }. For more information, <a href="https://www.octranspo.com/en/o-train-extension/lines-stations/${
							station.station_extension == "west"
								? "o-train-west-2/#line1"
								: "o-train-east-2/#line1"
					  }">visit our O-Train ${
							station.station_extension == "west" ? "West" : "Line 1 East"
					  } Extension page</a>.</p>
				</div>
			</div>`
					: `{...}`;

			section_trainBoarding.appendChild(note);
		}
		if (station.station_type.line_3) {
			const note = document.createElement("div");
			note.innerHTML = `
			<div class="note note__type--info">
				<p class="note__title">This is a future O-Train Line <span class="rt rt-type--line3">3</span> station.</p>
				<div class="note__desc">
					<p>Line 3 is a future O-Train Line coming in 2026. For more information, <a href="https://www.octranspo.com/en/o-train-extension/lines-stations/o-train-west-2/#line3">visit our O-Train West Extension page.</a></p>
				</div>
			</div>`;
			section_trainBoarding.appendChild(note);
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
		let tbody = document.createElement("tbody");
		let h3 = document.createElement("h3");
		// caption.appendChild(h3)

		// Create header row with "Route" and "Stop Name" (only once)
		let headerRow = document.createElement("tr");

		let row_routeHeader = document.createElement("th");
		row_routeHeader.textContent = "Route";
		headerRow.appendChild(row_routeHeader);

		let row_stopNameHeader = document.createElement("th");
		row_stopNameHeader.textContent = "Stop Name";
		headerRow.appendChild(row_stopNameHeader);

		lang == "en"
			? (caption.textContent = "Bus boarding locations")
			: (caption.textContent = "{Bus boarding locations}");

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
				for (var connectingStop of matchingStation.connecting_stops.split(
					", "
				)) {
					if (connectingStop == stop.stop_560) {
						let routes = stop.routes.split(", ");
						appendRowsToBusBoardingTable(
							tbody,
							routes,
							`${stop.name} (${lang == "en" ? "#" : `n<sup>o</sup>`}${
								stop.stop_560
							})`,
							`${matchingStation.station_name}`
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
			table.className = "light boarding-locations";
			// tbody.className = "grid--3col";
			stationRoutes = buildRouteListParagraph(tbody);
		} else if (tbody.innerHTML == "") {
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
		// routeListParagraph.className = "p-1 bordered";
		routeListParagraph.style.lineHeight = "150%";

		let content = document.createElement("div");
		content.appendChild(routeListParagraph);

		// content.appendChild(createInfoNote("New Ways to Bus service will begin on [date]"))

		// Append each unique span to the paragraph
		uniqueSpans.forEach((span) => {
			routeListParagraph.appendChild(span);
			routeListParagraph.appendChild(document.createTextNode(" ")); // Add space between spans
		});
		let title = document.createElement("strong");
		title.textContent = lang == "en" ? "Bus routes" : "{}";
		// title.className = "banner banner--nwtb mb-0";
		// title.style.borderRadius = "0.5rem 0.5rem 0 0";
		// title.style.paddingTop = "0.5rem";
		// title.style.paddingBottom = "0.5rem";
		//NWTB

		stationRoutes.appendChild(title);
		stationRoutes.appendChild(routeListParagraph);

		return stationRoutes;
		// appendListItem(cardBody, title, content);
	}
	function buildStationInfoCard(
		infoCard,
		lang,
		matchingStation,
		lines,
		futureLines,
		selectOptionType
	) {
		// Add the card and station-info-card classes to the div
		infoCard.classList.add("card", "station-info-card");

		// Create the title div
		const cardTitle = document.createElement("p");
		cardTitle.id = "station-info-card-title";
		cardTitle.classList.add("card__title");

		if (matchingStation.station_560) {
			cardTitle.innerHTML =
				lang == "en"
					? `<span style="color: var(--caption-color);">560#</span> <strong>${matchingStation.station_560}</strong>`
					: `<span style="color: var(--caption-color);">n<sup>o</sup>560</span> <strong>${matchingStation.station_560}</strong>`;
		} else {
			document.getElementById("station-info-card").remove();
		}

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
		// if (matchingStation.station_560) {
		// 	no560.innerHTML =
		// 		lang == "en"
		// 			? `560#: <strong>${matchingStation.station_560}</strong>`
		// 			: `n<sup>o</sup>560: <strong>${matchingStation.station_560}</strong>`;
		// }

		no560.textContent ? basicStationInfo.appendChild(no560) : "";
		selectOptionType.textContent
			? basicStationInfo.appendChild(selectOptionType)
			: "";
		//

		//if address exists
		let address = document.createElement("a");

		let accessPoint = document.createElement("div");

		if (
			matchingStation.station_location.address &&
			matchingStation.station_location.google_link
		) {
			address.textContent = matchingStation.station_location.address;
			address.href = matchingStation.station_location.google_link;
		}
		if (matchingStation.station_location.access_point) {
			let title = document.createElement("strong");
			title.textContent = lang == "en" ? "Access points" : "{Access points}";

			lang == "fr"
				? (accessPoint.innerHTML =
						matchingStation.station_location.access_point_fr)
				: (accessPoint.innerHTML =
						matchingStation.station_location.access_point);

			appendListItem(cardBody, title, accessPoint);
		} else {
			accessPoint.textContent = "";
		}

		let location = document.createElement("div");
		address.textContent ? location.appendChild(address) : "";

		if (location.textContent != "") {
			appendListItem(cardBody, "", location);
		}

		if (lines.textContent != "") {
			let title = document.createElement("strong");
			title.innerHTML = lang == "en" ? `Lines` : "{}";
			appendListItem(cardBody, title, lines);
		}

		if (futureLines.textContent) {
			let title = document.createElement("strong");
			title.innerHTML =
				lang == "en"
					? `Future lines <span class="tag tag-type__warning">Under development</span>`
					: "{}";
			appendListItem(cardBody, title, futureLines);
		}
	}

	function appendListItem(cardBody, title, content) {
		let item = document.createElement("li");
		cardBody?.appendChild(item);
		if (title != "") item.append(title);
		item.append(content);
	}

	function transformPtoUL(p1, p2) {
		const items1 = p1.split("\n").map((item) => item.trim());
		const ul = document.createElement("ul");

		let defaultItems = ""
		if (p2){
			defaultItems = p2.split("\n").map((item) => item.trim());
			defaultItems.forEach((text) => {
				const li = document.createElement("li");
				li.textContent = text;
				li.textContent == "" ? "" : ul.appendChild(li);
			});
		}

		// Loop through the items and create list elements
		items1.forEach((text) => {
			const li = document.createElement("li");
			li.textContent = text;
			li.textContent == "" ? "" : ul.appendChild(li);
		});
		// Loop through the items and create list elements
		

		return ul;
	}

	function createDecorCard(card, classList, title, liDefaults) {
		const cardDiv = document.createElement("div");
		card.className = classList;

		// Create the <h4> element for the title
		const titleElement = document.createElement("h4");
		titleElement.classList.add("card__title");
		titleElement.innerHTML = title;

		// Append the <h4> title to the new <div>
		let customListItems = card.getElementsByTagName("ul")[0].textContent.replace("Insert custom list item","")
		let listItems = transformPtoUL(customListItems, liDefaults)
		
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

	function populateImageGallery(arr) {
		const galleryContainer = document.createElement("div");
		galleryContainer.className =
			"stage-2 container container-photo-gallery-header image-gallery-carousel-main no-padding";

		galleryContainer.innerHTML = `
        <div class="photo-gallery-generic">
            <div class="row photo-gallery-first-row">
                <div class="col-4"><!-- <h2>Photo Gallery</h2> --></div>
                <div class="col-4 gallery-subhead-arrows" id="gallery-subhead-arrows-main">
                    <p class="subhead">${
											lang == "en" ? "Station in photos" : "Station en photos"
										}</p>
                    <div class="col-4">
						<div
							class="navigation-buttons-section navigation-buttons-section--spotlight photo-carousel-container-nav photo-carousel-container-nav--new"
						>
							<div class="navigation-buttons-slider prev">
								<img
									alt="left-arrow-button"
									src="/themes/user/site/octranspo/assets/img/stage-2/left-arrow-button.svg"
								/>
							</div>
	
							<div class="navigation-buttons-slider next">
								<img
									alt="right-arrow-button"
									src="/themes/user/site/octranspo/assets/img/stage-2/right-arrow-button.svg"
								/>
							</div>
						</div>
					</div>
                </div>
            </div>
            <div class="container carousel-container photo-carousel-container">
                <div class="gallery-carousel image-gallery-carousel gallery-carousel__item-wrapper" data-js="image-gallery-carousel-main"></div>
            </div>
        </div>
    `;

		const track = galleryContainer.querySelector(".gallery-carousel");

		arr.forEach((item) => {
			const galleryItem = document.createElement("div");
			galleryItem.className = "gallery-image";

			galleryItem.innerHTML = `<figure>
                <img src="${item.src}" alt="${
				lang == "en" ? item.caption : item.caption_fr
			}">
                <figcaption>${
									lang == "en" ? item.caption : item.caption_fr
								}</figcaption> </figure>`;

			track.appendChild(galleryItem);
		});

		section_explore.appendChild(galleryContainer);
	}

	function populate360Section(url) {
		// Create the <div> element with class "grid--2col"
		const gridDiv = document.createElement("div");
		gridDiv.classList.add("grid--2col");

		// Create the <div> element with class "iframe-container"
		const iframeContainerDiv = document.createElement("div");
		iframeContainerDiv.classList.add("iframe-container");

		const iframe = document.createElement("iframe");
		iframe.setAttribute("allow", "xr-spatial-tracking");
		iframe.setAttribute("allowfullscreen", "");
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("height", "480");
		iframe.setAttribute("src", url);
		iframe.setAttribute("width", "853");

		// Append the iframe to the <p> element, then the <p> to the iframe container

		iframeContainerDiv.appendChild(iframe);

		// Create the <ul> element with class "card-list col"
		const ulElement = document.createElement("ul");
		ulElement.classList.add("col");

		// Create the list items <li> elements and append them to the <ul>

		let listItems = [
			"<strong>Easy navigation:</strong> Simply use your mouse to explore the interior of the station. Change floors effortlessly by clicking on the 'Station Level guide' located at the bottom left.",
			"<strong>Discover station Features:</strong> Click on the red and white 'O' buttons scattered around the station for detailed information about its features.",
			"<strong>Tour date:</strong> Note that this tour was recorded during station construction. Any fencing visible in the tour has now been removed.",
			"<strong>Loading time:</strong> After pressing 'Play', please wait momentarily for the tour to load completely for an uninterrupted experience.",
		];

		if (lang == "fr") {
			listItems = [
				"<strong>Navigation facile :</strong> Utilisez simplement votre souris pour explorer l&#39;int&eacute;rieur de la station. Changez d&#39;&eacute;tage facilement en cliquant sur le &laquo; Guide des niveaux de la station &raquo; situ&eacute; en bas &agrave; gauche.",
				"<strong>D&eacute;couvrez les fonctionnalit&eacute;s de la station :</strong> Cliquez sur les boutons rouges et blancs en forme de &laquo; O &raquo; dispers&eacute;s autour de la station pour obtenir des informations d&eacute;taill&eacute;es sur ses fonctionnalit&eacute;s.",
				"<strong>Date de la visite :</strong> Cette visite a été enregistrée pendant les travaux de construction de la station. Toutes les cl&ocirc;tures visibles dans la visite ont maintenant &eacute;t&eacute; retir&eacute;es.",
				"<strong>Temps de chargement :</strong> Apr&egrave;s avoir appuy&eacute; sur &laquo; Lire &raquo;, veuillez patienter un instant pour que la visite se charge compl&egrave;tement afin de profiter d&#39;une exp&eacute;rience ininterrompue.",
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

	function buildExploreSection() {
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
		quickFactsDiv.classList.add(
			"page-section",
			"banner",
			"section",
			"x-scroll",
			"line1"
		);

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
					: "Mise Ã  jour"
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

	function addHeroImageURL(url) {
		getElementById("station-hero-img").style.backgroundImage = `url(${url})`;
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
	function buildStationLayoutSectionLayout() {
		section_stationLayout.className = "grid grid-1fr-2fr";
		// createSectionH2(
		// 	lang == "en" ? "Station layout" : "Carte de la station",
		// 	section_stationLayout
		// );
	}

	function buildStopsSectionLayout() {
		section_stops.className = "";
		// createSectionH2(
		// 	lang == "en" ? "Boarding locations" : "Zones d'embarquement",
		// 	section_stops
		// );
	}
}

/** PART II Select options start **/
document.addEventListener("DOMContentLoaded", () => {
	// Initialize variables for station listing components
	const selectOptions = document.getElementsByTagName("select");
	const searchInputs = document.getElementsByTagName("input");
	const selects = document.getElementsByTagName("select");

	/******** Part Station listing compoentns: auto generating list of stations */
	// Train and bus icons
	const trainIcon = createIconElement(
		"transport_train",
		lang == "en" ? "O-Train station" : "Station de l'O-Train"
	);
	const busIcon = createIconElement(
		"transport_bus",
		lang == "en" ? "Transitway station" : `Stations du transport en commun`
	);
	const pnrIcon = createIconElement(
		"service_pnr-grey.svg",
		"Park & Ride available"
	);

	// Append section headers with icons and titles
	const appendStnListTitle = (hLevel, sectionId, title, icon, icon2, icon3) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const header = document.createElement(hLevel);
			header.className = "flex flex-ai-c";
			// header.style.fontSize = "1.3rem";
			// header.style.fontWeight = "700";
			header.appendChild(icon);
			icon2 ? header.appendChild(icon2) : "";
			icon3 ? header.appendChild(icon3) : "";
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
		"h2",
		"line1Stns",
		lang == "en" ? "Line 1 stations" : "Stations de la Ligne 1 :",
		trainIcon.cloneNode(true),
		createLineIcon(1, lang)
	);
	appendStnListTitle(
		"h2",
		"line1Stns_east",
		lang == "en"
			? "Line 1 East extension stations"
			: "Stations de l’Extension de la Ligne 1 Est",
		trainIcon.cloneNode(true),
		createLineIcon(1, lang)
	);

	appendStnListTitle(
		"h2",
		"allStns_west",
		lang == "en"
			? "West extension stations"
			: "Stations de l’Extension de l'Ouest",
		trainIcon.cloneNode(true),
		createLineIcon(1, lang),
		createLineIcon(3, lang)
	);
	appendStnListTitle(
		"h2",
		"allStns_east",
		lang == "en"
			? "East extension stations"
			: "Stations de l’Extension de l'Est",
		trainIcon.cloneNode(true),
		createLineIcon(1, lang),
		createLineIcon(3, lang)
	);
	appendStnListTitle(
		"h2",
		"line1Stns_west",
		lang == "en"
			? "Line 1 West extension stations"
			: "Stations de l’Extension de la Ligne 1 Ouest",
		trainIcon.cloneNode(true),
		createLineIcon(1, lang)
	);
	appendStnListTitle(
		"h2",
		"line2Stns",
		lang == "en" ? "Line 2 stations" : "Stations de la Ligne 2",
		trainIcon.cloneNode(true),
		createLineIcon(2, lang)
	);
	appendStnListTitle(
		"h2",
		"line3Stns",
		lang == "en" ? "Line 3 stations" : "Stations de la Ligne 3",
		trainIcon.cloneNode(true),
		createLineIcon(3, lang)
	);
	appendStnListTitle(
		"h2",
		"line3Stns_west",
		lang == "en"
			? "Line 3 West extension stations"
			: "Stations de l’Extension de la Ligne 3 Ouest",
		trainIcon.cloneNode(true),
		createLineIcon(3, lang)
	);
	appendStnListTitle(
		"h2",
		"line4Stns",
		lang == "en" ? "Line 4 stations" : "Stations de la Ligne 4",
		trainIcon.cloneNode(true),
		createLineIcon(4, lang)
	);
	appendStnListTitle(
		"h2",
		"transitwayStns",
		lang == "en" ? "Transitway Stations" : "Stations du transport en commun)",
		busIcon.cloneNode(true),
		""
	);
	appendStnListTitle(
		"h2",
		"transitwayStns_west",
		lang == "en"
			? "West Transitway Stations"
			: "Stations du transport en commun de l'ouest)",
		busIcon.cloneNode(true),
		""
	);
	appendStnListTitle(
		"h2",
		"transitwayStns_east",
		lang == "en"
			? "East Transitway Stations"
			: "Stations du transport en commun de l'est)",
		busIcon.cloneNode(true),
		""
	);
	appendStnListTitle(
		"h2",
		"transitwayStns_southwest",
		lang == "en"
			? "Southwest Transitway Stations"
			: "Stations du transport en commun de la sud-ouest)",
		busIcon.cloneNode(true),
		""
	);
	appendStnListTitle(
		"h2",
		"transitwayStns_southeast",
		lang == "en"
			? "Southeast Transitway Stations"
			: "Stations du transport en commun de la sud-est)",
		busIcon.cloneNode(true),
		""
	);

	fetch("/data/stations.json")
		// fetch("/images/files/data/stations.json")
		.then((response) => response.json())
		.then((stations) => {
			// part 1 populate the stations in their respective sections
			populateStationSections(stations);
			const lineRoutings = document.querySelectorAll(".line-routing");
			if (lineRoutings) {
				for (lineRouting of lineRoutings) {
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
});

function populateStationSections(stations) {
	// Loop through each station in the stations array
	stations.forEach((station) => {
		// Check if the station belongs to which line / extension
		if (
			station.station_extension == "" &&
			station.station_type.line_1 == true
		) {
			addStationsToSection("line1Stns", station);
		}

		if (
			station.station_extension == "east" &&
			station.station_type.line_1 == true
		) {
			addStationsToSection("line1Stns_east", station);
		}
		if (station.station_extension == "west") {
			addStationsToSection("allStns_west", station);
		}
		if (station.station_extension == "east") {
			addStationsToSection("allStns_east", station);
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
		// Check if the station belongs to Line 3 and west extension
		if (
			station.station_extension == "west" &&
			station.station_type.line_3 == true
		) {
			addStationsToSection("line3Stns_west", station);
		}

		// else if (station.station_completed.line_3 == false) {
		// 	addStationsToSection("future_line3Stns", station);
		// }

		// Check if the station belongs to Line 4
		if (station.station_type.line_4 == true) {
			addStationsToSection("line4Stns", station);
		}

		// Check if the station is a transitway station (all)
		if (station.station_type.transitway) {
			addStationsToSection("transitwayStns", station);
		}
		// Check if the station is a  transitway station (west)
		if (station.station_type.transitway == "west") {
			addStationsToSection("transitwayStns_west", station);
		}
		// Check if the station is a  transitway station (east)
		if (station.station_type.transitway == "east") {
			addStationsToSection("transitwayStns_east", station);
		}
		// Check if the station is a  transitway station (southwest)
		if (station.station_type.transitway == "southwest") {
			addStationsToSection("transitwayStns_southwest", station);
		}
		// Check if the station is a  transitway station (southeast)
		if (station.station_type.transitway == "southeast") {
			addStationsToSection("transitwayStns_southeast", station);
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

			// for prod
			lang == "en"
				? (stationA.href = station.station_url.prod)
				: (stationA.href = station.station_url.prod_fr);

			// // For staging
			// lang == "en"
			// 	? (stationA.href = station.station_url.staging)
			// 	: (stationA.href = station.station_url.staging_fr);

			// if (station.station_url.staging){
			// 	stationA.style.color = 'limegreen'
			// } else{stationA.style.color = 'red' }
			// // end For staging

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
					<span class="name">${stationName}</span>
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
	if (station.station_type.transitway) {
		lineIcons.push(
			createIconElement(
				"transport_bus",
				lang == "en" ? "Transitway station" : `Station du transport en commun`
			)
		);
	}
	if (station.station_feature.accessible) {
		lineIcons.push(
			createIconElement("accessibility_accessible-forward", "Accessible")
		);
	}
	if (station.station_feature.pnr) {
		lineIcons.push(
			createIconElement(
				"service_pnr-grey",
				lang == "en" ? "Park & Ride" : "Parc relais"
			)
		);
	}
	if (station.station_feature.airport) {
		lineIcons.push(
			createIconElement(
				"station_airport-grey--500",
				lang == "en" ? "Airport" : "Aéroport"
			)
		);
	}
	if (station.station_feature.via) {
		lineIcons.push(
			createIconElement(
				"station_via",
				lang == "en" ? "Via Rail Canada" : "Via Rail Canada"
			)
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

function populateStationSelect(select, stations, selectOptionType) {
	// select the existing <select> element by its ID
	const label = document.createElement("label");
	var placeholderOption = document.createElement("option");
	// create default option

	if (selectOptionType == "all") {
		label.textContent = lang == "en" ? "All stations" : "Toutes les stations :";
		placeholderOption.textContent =
			lang == "en" ? "Select a station" : "Choisir une station";
	}
	if (selectOptionType == "train") {
		label.textContent =
			lang == "en" ? "All train stations" : "Toutes les stations :";
		placeholderOption.textContent =
			lang == "en" ? "Select a train station" : "Choisir une station";
		placeholderOption.textContent =
			lang == "en" ? "Select a train station" : "Choisir une station";
	}
	if (selectOptionType == "line1") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line1"> 1</span> stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line1 inline-icon"> 1</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 1 station"
				: "Choisir une station de la Ligne 1";
	}
	if (selectOptionType == "line1_all") {
		label.innerHTML =
			lang == "en"
				? `Current and future Line <span class="icon rt rt-type--line1"> 1</span> stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line1 inline-icon"> 1</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 1 station"
				: "Choisir une station de la Ligne 1";
	}
	if (selectOptionType == "line1_west") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line1"> 1</span> West extension stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line1 inline-icon"> 1</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 1 station"
				: "Choisir une station de la Ligne 1";
	}
	if (selectOptionType == "line1_east") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line1"> 1</span> East extension stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line1 inline-icon"> 1</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 1 station"
				: "Choisir une station de la Ligne 1";
	}
	if (selectOptionType == "line2") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line2"> 2</span> stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line2 inline-icon"> 2</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 2 station"
				: "Choisir une station de la Ligne 2";
	}
	if (selectOptionType == "line3") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line3"> 3</span> stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line3 inline-icon"> 3</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 3 station"
				: "Choisir une station de la Ligne 3";
	}
	if (selectOptionType == "line3_west") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line3"> 3</span> West extension stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line3 inline-icon"> 3</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 3 station"
				: "Choisir une station de la Ligne 3";
	}
	if (selectOptionType == "line4") {
		label.innerHTML =
			lang == "en"
				? `All Line <span class="icon rt rt-type--line4"> 4</span> stations`
				: `Toutes les stations de la Ligne <span class="icon rt rt-type--line4 inline-icon"> 4</span> :`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Line 4 station"
				: "Choisir une station de la Ligne 4";
	}
	if (selectOptionType == "transitway") {
		label.textContent =
			lang == "en"
				? `All Transitway stations`
				: `Station du transport en commun`;
		placeholderOption.textContent =
			lang == "en"
				? "Select a Transitway station"
				: "Choisir une station du transport en commun";
	}

	select.appendChild(placeholderOption);
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

		if (selectOptionType == "all") {
			select.appendChild(option);
		}
		if (selectOptionType == "train") {
			if (
				station.station_type.line_1 == true ||
				station.station_type.line_2 == true ||
				station.station_type.line_3 == true ||
				station.station_type.line_4 == true
			) {
				select.appendChild(option);
			}
		}
		if (selectOptionType == "line1_all") {
			station.station_type.line_1 == true ? select.appendChild(option) : "";
		}
		if (selectOptionType == "line1") {
			if (
				station.station_type.line_1 == true &&
				station.station_extension == ""
			) {
				select.appendChild(option);
			}
		}
		if (selectOptionType == "line1_east") {
			if (station.station_type.line_1 && station.station_extension == "east") {
				select.appendChild(option);
			}
		}
		if (selectOptionType == "line1_west") {
			if (station.station_type.line_1 && station.station_extension == "west") {
				select.appendChild(option);
			}
		}
		if (selectOptionType == "line2") {
			station.station_type.line_2 == true ? select.appendChild(option) : "";
		}
		if (selectOptionType == "line3") {
			station.station_type.line_3 == true ? select.appendChild(option) : "";
		}
		if (selectOptionType == "line3_west") {
			if (station.station_type.line_3 && station.station_extension == "west") {
				select.appendChild(option);
			}
		}
		if (selectOptionType == "line4") {
			station.station_type.line_4 == true ? select.appendChild(option) : "";
		}
		if (selectOptionType == "transitway") {
			if (station.station_url.prod && station.station_type.transitway) {
				select.appendChild(option);
			}
		}
	});
}

// Helper function to create line icon elements
const createLineIcon = (lineNumber, lang) => {
	const line = document.createElement("span");
	line.className = `icon rt rt-type--line${lineNumber}`;
	if (lineNumber == 3) {
		line.title =
			lang == "en"
				? `Future O-Train Line ${lineNumber}`
				: `Future Ligne ${lineNumber} de l'O-Train`;
		line.innerHTML =
			lang === "en"
				? `<span class="visuallyhidden">Future Line </span>${lineNumber}`
				: `<span class="visuallyhidden">Future Ligne </span>${lineNumber}`;
	} else {
		line.title =
			lang == "en"
				? `O-Train Line ${lineNumber}`
				: `Ligne ${lineNumber} de l'O-Train`;
		line.innerHTML =
			lang === "en"
				? `<span class="visuallyhidden">Line </span>${lineNumber}`
				: `<span class="visuallyhidden">Ligne </span>${lineNumber}`;
	}

	return line;
};

// Helper function to create transport icons (train/bus)
const createIconElement = (iconName, altText) => {
	span = document.createElement("span");
	span.className = "flex flex-ai-c";
	const icon = document.createElement("img");
	icon.className = "inline-icon";
	icon.alt = altText;
	icon.title = altText;
	icon.src = `https://www.octranspo.com/images/files/icons/${iconName}.svg`;
	span.appendChild(icon);
	return span;
};

function checkPage(currentUrl) {
	if (
		currentUrl.indexOf("our-services/stations") > 0 ||
		currentUrl.indexOf("nos-services/stations") > 0
	) {
		return "station";
	}
}

function checkSite(currentUrl) {
	if (currentUrl.indexOf("staging")) {
		return "staging";
	} else {
		return "prod";
	}
}

function checkPageLanguage(currentUrl) {
	if (currentUrl.indexOf("/fr/") == -1) {
		return "en";
	} else {
		return "fr";
	}
}

function getStationRoutes(matchingStation) {
	return routes;
}

function createHeroBanner() {
	const heroBanner = document.getElementById("station-hero-banner");
	// Create the img element
	const heroImg = document.createElement("img");

	if (heroBanner) {
		// Add the hero-banner class to the div
		heroBanner?.classList.add("hero-banner");
		// Append the img to the hero-banner div
		heroBanner.appendChild(heroImg);
	}

	// Set the id and style with background-image for the img element
	heroImg.id = "station-hero-img";
}

function getStationType(matchingStation, selectOptionType) {
	// Check which lines or bus services the station belongs to and append the icons accordingly
	if (matchingStation.station_type.line_1 == true) {
		if (matchingStation.station_extension) {
			futureStationLines.appendChild(line1.cloneNode(true));
		} else {
			stationLines.appendChild(line1.cloneNode(true));
		}
	}
	if (matchingStation.station_type.line_2 == true) {
		stationLines.appendChild(line2.cloneNode(true));
	}
	if (matchingStation.station_type.line_3 == true) {
		futureStationLines.appendChild(line3.cloneNode(true));
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
		trainStation = true;
		selectOptionType.textContent =
			lang == "en" ? "O-Train station" : "Station de l'O-Train";
	} else {
		document.getElementById("station-lines-li")?.remove();
	}
	// Check if the station is in the bus station array and append the bus icon
	if (matchingStation.station_type.transitway == true) {
		if (selectOptionType.textContent) {
			selectOptionType.textContent =
				lang == "en"
					? `${selectOptionType.textContent} | Transitway station`
					: `${selectOptionType.textContent} | Station du transport en commun`;
		} else {
			selectOptionType.textContent =
				lang == "en" ? "Transitway station" : "Station du transport en commun";
		}
	}

	return selectOptionType;
}
