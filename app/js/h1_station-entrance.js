/* This code is for dynamically styling the station page h1 banner */
const lang = checkPageLanguage(window.location.href);
const h1Element = document.querySelector("h1");

document.addEventListener("DOMContentLoaded", () => {
    fetch("/data/stations.json")
        // fetch("/images/files/data/stations.json")
        .then((response) => response.json())
        .then((data) => {
            const h1StationName = h1Element.textContent.replace("’", "'"); // Get the original text content

            let matchingStation = data.find(
                (station) =>
                    station.station_name == h1StationName ||
                    station.station_name_fr == h1StationName
            );

            if (h1StationName == "Template guide") {
                matchingStation = data.find(
                    (station) => station.station_name == "Bayview"
                );
            }

            if (matchingStation) {
                /***********  Part 1 ***********/
                // Add the 'station-banner' class
                h1Element.classList.add("station-banner");
                // Wrap the existing content in a <span>
                h1Element.innerHTML = `<span class="station-banner__title">${h1StationName}</span>`; // Wrap it in a <span>

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
                lang == "en"
                    ? (busIcon.alt = `Bus`)
                    : (busIcon.innerHTML = `Autobus`);
                busIcon.src =
                    "https://www.octranspo.com/images/files/icons/transport_bus-white.svg";

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
                                lang == "en"
                                    ? "Transitway station"
                                    : "Station du transport en commun";
                        }
                    }

                    return selectOptionType;
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
            } else {
                console.error("No matching station found.");
            }
        });
});


function checkPageLanguage(currentUrl) {
	if (currentUrl.indexOf("/fr/") == -1) {
		return "en";
	} else {
		return "fr";
	}
}

function checkPage(currentUrl) {
	if (
		currentUrl.indexOf("our-services/stations") > 0 ||
		currentUrl.indexOf("nos-services/stations") > 0
	) {
		return "station";
	}
}