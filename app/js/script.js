// toc
let toc = document.getElementsByClassName("toc");
let sections = document.getElementsByTagName("section");

// toc.className = "toc--list";

if (toc) {
	let toc_container = document.createElement("div");
	toc_container.className = "toc__container"
	toc[0].appendChild(toc_container);

	let toc_title = document.createElement("p");
	toc_title.className = "toc__title";
	toc_title.textContent = "On this page:";
	toc_container.appendChild(toc_title);


	let toc_items = document.createElement("div");
	toc_items.className = "toc__items"
	toc_container.appendChild(toc_items);


	for (let i = 0; i < sections.length; i++) {
		// warning if id is empty
		if (sections[i].id == "") {
			console.log(
				"Warning: Section '" +
				sections[i].getElementsByTagName("h2")[0].textContent +
				"' does not have an id"
				);
			}
		var toc_link = document.createElement("a");
		var href = "#" + sections[i].id;
		toc_link.href = href;
		toc_link.className = "toc__link";
		toc_link.textContent = sections[i].getElementsByTagName("h2")[0].textContent;
		toc_items.appendChild(toc_link);
	}

	window.addEventListener("scroll", function () {
		console.log("offset=", sections[1].offsetTop);
		console.log("scroll=", this.scrollY);
		for (let i = 0; i < sections.length; i++) {
			let section = sections[i];
			let sectionDistance = section.offsetTop;
			let toc_links = document.getElementsByClassName("toc__link");
			if (this.scrollY - 303 > sectionDistance) {
				section.classList.add("visible");
				let a = section.getAttribute("id");
				for (let j = 0; j < toc_links.length; j++) {
					let b = toc_links[j].href.split("#")[1];
					if (b == a) {
						toc_links[j].classList.add("active");
					} else {
						toc_links[j].classList.remove("active");
					}
				}
			} else {
				section.classList.remove("visible");
			}
		}
	});
}

/* select option */
//get chevron icon element:
const chevron = document.getElementsByClassName("chevron");

//get select option drop down button elemet:
const drop_down_button = document.getElementsByClassName("drop-down-button");

//get container with list of select option elements:
const selectOptionsGrid = document.getElementsByClassName(
	"select-options--grid"
);
// get list of elements with the class="select-options"
const options = document.getElementsByClassName("select-option");

// get list of elements with the parking-lot
const parkingLots = document.getElementsByClassName(
	"options-content-container"
);

//get the list container
const parentList = document.getElementsByClassName("options-content");

// get tag value

for (let i = 0; i < options.length; i++) {
	var iconsContainer = options[i].getElementsByClassName("icons");
	var iconSwitch = iconsContainer[0].getAttribute("data-switch").split(" ");

	//create goldStar element
	const goldStar = document.createElement("img");
	goldStar.setAttribute("class", "gold-star");
	goldStar.setAttribute("alt", "blue star icon with a light blue background");
	goldStar.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/tag_gold.svg"
	);
	goldStar.setAttribute(
		"title",
		"This Park & Ride lot has Gold permit parking spaces"
	);
	//create free tag element
	const permitTag = document.createElement("img");
	permitTag.setAttribute("class", "permit-tag");
	permitTag.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/tag_permit_en.svg"
	);
	permitTag.setAttribute(
		"alt",
		"'Permit' in blue font colour with a light blue background"
	);
	permitTag.setAttribute("title", "This Park & Ride lot requires permits");

	const freeTag = document.createElement("img");
	freeTag.setAttribute("class", "free-tag");
	freeTag.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/tag_free_en.svg"
		// "https://www.octranspo.com/images/files/icons/tag_free_fr.svg"
	);
	freeTag.setAttribute(
		"alt",
		"'FREE' in green font with a light green background"
	);
	freeTag.setAttribute("title", "This Park & Ride lot offers free parking");

	const freeTagLimited = document.createElement("img");
	freeTagLimited.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/tag_free-limited_en_v2.svg"
		// "https://www.octranspo.com/images/files/icons/tag_free-limited_fr_v2.svg"
	);
	freeTagLimited.setAttribute(
		"alt",
		"'FREE' in green font with a light green background with white diagonal stripes"
	);
	freeTagLimited.setAttribute(
		"title",
		"This Park & Ride lot offers limited free parking"
	);

	const quickTag = document.createElement("img");
	quickTag.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/tag_warning.svg"
	);
	quickTag.setAttribute("alt", "yellow triangle icon with a exclamation mark");
	quickTag.setAttribute("title", "This Park & Ride lot fills up quickly");

	console.log(iconSwitch[1]);

	if (iconSwitch[2] == "1") {
		iconsContainer[0].appendChild(quickTag);
	}
	if (iconSwitch[0] == "1") {
		iconsContainer[0].appendChild(goldStar);
	}
	if (iconSwitch[3] == "1") {
		iconsContainer[0].appendChild(permitTag);
	}

	if (iconSwitch[1] == "1") {
		iconsContainer[0].appendChild(freeTag);
	}
	if (iconSwitch[1] == "1-l") {
		iconsContainer[0].appendChild(freeTagLimited);
	}
}

//Functon to open/hide parking lot info

function openStationDetails(value) {
	parentList[0].classList.add("active");
	console.log("3. Inside openStationDetails Function...");
	// Loop through list of parkingLots and add class"hidden" for parkingLots that have different ids than value and delete"active" if it exists
	for (let i = 0; i < parkingLots.length; i++) {
		if (
			parkingLots[i].getAttribute("data-value").toUpperCase() ==
			value.toUpperCase()
		) {
			console.log("4. Found a match");
			parkingLots[i].classList.remove("hidden");
			parkingLots[i].classList.add("active");
		} else {
			parkingLots[i].classList.add("hidden");
			parkingLots[i].classList.remove("active");
		}
	}

	// if parkingLot id == value, remove class"hidden"
}

//Function to change text inside container

function changeSelectOptionText(value) {
	//change the text inside Dropdown select container

	//add active class to selected
	for (let i = 0; i < options.length; i++) {
		if (
			options[i].getAttribute("data-value").toUpperCase() == value.toUpperCase()
		) {
			options[i].classList.add("active");
		} else {
			options[i].classList.remove("active");
		}
	}
}

//Function to hide all station info
function hideAllOnLoad(callback) {
	console.log("1. hiding all details...");
	for (let i = 0; i < parkingLots.length; i++) {
		parkingLots[i].classList.remove("active");
		parkingLots[i].classList.add("hidden");
	}
	callback();
}

//

//Function to check URL
function getStationIDfromURL() {
	currentUrl = window.location.href;
	stationIDinUrl = currentUrl.split("#")[1];
	if (stationIDinUrl) {
		stationName = stationIDinUrl.split("-")[1];
		console.log(
			"2. StationID: ",
			stationIDinUrl,
			", StationName: ",
			stationName
		);
		changeSelectOptionText(stationName);
		openStationDetails(stationName);
	} else {
		console.log("no Station ID found in url");
	}
}

//on load hide elements

onload = (event) => {
	hideAllOnLoad(getStationIDfromURL);

	// on load - if there is #id at the end of url
};

//click event for drop down select

for (let i = 0; i < options.length; i++) {
	console.log(options[i].textContent);
	options[i].addEventListener("click", (event) => {
		// event.preventDefault();

		openStationDetails(event.target.getAttribute("data-value"));

		changeSelectOptionText(event.target.getAttribute("data-value"));
		//here
	});
}
