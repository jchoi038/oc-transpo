document.addEventListener("DOMContentLoaded", () => {
	const h1Element = document.querySelector('h1');

	var dynamicArea = document.getElementById("dynamic-area");

	var station560s = [
		3009, 3010, 3011, 3012, 3013, 3017, 3018, 3021, 3022, 3023, 3024, 3025,
		3026, 3027, 3029, 3031, 3032, 3034, 3035, 3036, 3037, 3038, 3039, 3040,
		3041, 3043, 3044, 3045, 3048, 3049, 3050, 3051, 3052, 3055, 3058, 3059,
		3060, 3061, 3063, 3065, 3067, 3068, 3069, 3074, 5813, 8813, 8810, 3057,
		3016, 3070, 3014, 3046, 3030, 3000, 3047, 3076, 3042, 3019, 3028, 3033,
	];

	var station_560key = new Map(
		[
			[3009, "Rideau"],
			[3010, "Pimisi"],
			[3011, "Tunney's Pasture"],
			[3012, "Westboro"],
			[3013, "Dominion"],
			[3017, "Baseline (Algonquin)"],
			[3018, "Teron"],
			[3021, "uOttawa"],
			[3022, "Lees"],
			[3023, "Hurdman"],
			[3024, "Tremblay"],
			[3025, "St-Laurent"],
			[3026, "Cyrville"],
			[3027, "Blair"],
			[3029, "Trim"],
			[3031, "Smyth"],
			[3032, "Riverside"],
			[3034, "Billings Bridge"],
			[3035, "Heron"],
			[3036, "Walkley"],
			[3037, "Greenboro"],
			[3038, "South Keys"],
			[3039, "Airport"],
			[3040, "Riverview"],
			[3041, "Leitrim"],
			[3043, "Fallowfield"],
			[3044, "Strandherd"],
			[3045, "Barrhaven Centre"],
			[3048, "Nepean Woods"],
			[3049, "Beatrice"],
			[3050, "Bayshore"],
			[3051, "Lyon"],
			[3052, "Parliament / Parlement"],
			[3055, "Eagleson"],
			[3058, "Terry Fox"],
			[3059, "Canadian Tire Centre"],
			[3060, "Bayview"],
			[3061, "Dow's Lake"],
			[3063, "Mooney's Bay"],
			[3065, "Corso Italia"],
			[3067, "Bowesville"],
			[3068, "Limebank"],
			[3069, "Uplands"],
			[3074, "Chapel Hill"],
			[5813, "Carleton"],
			[8813, "Elmvale"],
			[8810, "Elmvale"],
			[3057, "Innovation"],
			[3016, "Iris"],
			[3070, "Jeanne d'Arc"],
			[3014, "Lincoln Fields"],
			[3046, "Longfields"],
			[3030, "Lycée Claudel"],
			[3000, "Mackenzie King"],
			[3047, "Marketplace"],
			[3076, "Millennium"],
			[3042, "Moodie"],
			[3019, "Pinecrest"],
			[3028, "Place d'Orléans"],
			[3033, "Pleasant Park"],
			[3015, "Queensway"],
		].sort()
	);

	var line1Stations = [
		3060, 3027, 3026, 3023, 3022, 3051, 3052, 3010, 3009, 3025, 3024, 3011,
		3021,
	];
	var line2Stations = [
		3060, 3067, 5813, 3065, 3061, 3037, 3041, 3068, 3063, 3038, 3036,
	];
	var line4Stations = [3039, 3038, 3069];
	var busStations = [
		3045, 3017, 3050, 3060, 3049, 3034, 3059, 5813, 3074, 3013, 3055, 3043,
		3037, 3035, 3023, 3057, 3016, 3070, 3022, 3041, 3068, 3014, 3046, 3030,
		3051, 3000, 3047, 3076, 3042, 3063, 3048, 3052, 3010, 3019, 3028, 3033,
		3015, 3009, 3032, 3040, 3031, 3038, 3025, 3044, 3018, 3058, 3024, 3029,
		3011, 3021, 3036, 3012,
	];
	fetch("/data/stopRecipes.json")
		.then((response) => response.json())
		.then((stopRecipes) => {
			// sort station data alphabetically
			stopRecipes.sort(function (a, b) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});

			// creating sections per station (prev)
			station_560key.forEach(createSection);



			//get all sections for stations
			let sections = document
				.getElementById("dynamic-area")
				.getElementsByTagName("section");

			// creating stop tables
			for (var stop of stopRecipes) {
				// only do the following if stop is a station stop
				if (station560s.includes(stop.stop_560)) {
					let table = document.createElement("table");
					let thead = document.createElement("thead");
					let tr = document.createElement("tr");
					let tbody = document.createElement("tbody");
					thead.appendChild(tr);
					table.appendChild(thead);
					table.appendChild(tbody);
					table.classList.add("light");
					table.classList.add("stop-table");
					table.setAttribute("data-560", stop.stop_560);
					let row_stopName = document.createElement("th");
					let routes = createCommaSeperatedtoArray(stop.routes);
					row_stopName.textContent = stop.name;
					tr.appendChild(row_stopName);

					for (var route of routes) {
						let row = document.createElement("tr");
						let cell = document.createElement("td");
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
						cell.textContent = route;
						// replace the first word (which is the route number) of each cell to wrap with <span>
						cell.innerHTML = cell.textContent.replace(
							/^(<[^\/]*[^>]*>)*(\w+\b)/g,
							`$1<span class="rt rt-type--${route_icon}">$2</span>`
						);

						row.appendChild(cell);
						tbody.appendChild(row);
					}
					// Organize tables by grouping them under their respective station
					for (var section of sections) {
						if (section.getAttribute("data-560") == stop.stop_560) {
							section.appendChild(table);
						}
					}
				}
			}
		});

	function createCommaSeperatedtoArray(originalString) {
		return (separatedArray = originalString.split(", "));
	}

	function createSection(value, key, map) {
		//create line 1 icon
		let line1Icon = document.createElement("span");
		line1Icon.classList.add("rt", "rt-type--line1");
		line1Icon.textContent = "1";
		//create line 2 icon
		let line2Icon = document.createElement("span");
		line2Icon.classList.add("rt", "rt-type--line2");
		line2Icon.textContent = "2";
		//create line 4 icon
		let line4Icon = document.createElement("span");
		line4Icon.classList.add("rt", "rt-type--line4");
		line4Icon.textContent = "4";
		//create bus icon
		let busIcon = document.createElement("span");
		busIcon.classList.add("rt", "rt-type--bus");
		busIcon.textContent = "-";

		// Line 1
		var section = document.createElement("section");
		var heading = document.createElement("div");
		var station_name = document.createElement("h2");
		station_name.className = "flex gap-0_5";
		var station_560 = document.createElement("strong");

		station_name.textContent = value;
		station_560.textContent = key;

		section.setAttribute("data-560", key);
		section.appendChild(heading);

		// check and mark line 1 stations
		if (line1Stations.includes(key)) {
			station_name.prepend(line1Icon);
		}
		//check for line 2 stations
		if (line2Stations.includes(key)) {
			station_name.prepend(line2Icon);
		}
		//check for line 4 stations
		if (line4Stations.includes(key)) {
			station_name.prepend(line4Icon);
		}
		//check for transitway bus stations
		if (busStations.includes(key)) {
			station_name.prepend(busIcon);
		}
		heading.appendChild(station_name);
		heading.appendChild(station_560);

		section.classList.add("section");
		section.classList.add("grid--3col");
		section.classList.add("grid--3col");
		heading.setAttribute("style", "grid-column: 1/-1");
		section.setAttribute("id", value);

		dynamicArea.appendChild(section);
	}
});
