//get chevron icon element:
const chevron = document.getElementsByClassName("chevron");

//get select option drop down button elemet:
const drop_down_button = document.getElementsByClassName("drop-down-button");

//get container with list of select option elements:
const selectOptionsGrid = document.getElementsByClassName(
	"select-options-grid"
);
// get list of elements with the class="select-options"
const options = document.getElementsByClassName("select-option");

// get list of elements with the parking-lot
const selectOptionContents = document.getElementsByClassName(
	"select-option-content"
);

//get the list container
const parentList = document.getElementsByClassName("all-select-option-contents");

//Functon to open/hide parking lot info

function openSelection(value) {
	parentList[0].classList.add("active");
	console.log("3. Inside openSelection Function...");
	// Loop through list of selectOptionContents and add class"hidden" for selectOptionContents that have different ids than value and delete"active" if it exists
	for (let i = 0; i < selectOptionContents.length; i++) {
		if (
			selectOptionContents[i].getAttribute("select-option-id").toUpperCase() ==
			value.toUpperCase()
		) {
			console.log("4. Found a match");
			selectOptionContents[i].classList.remove("hidden");
			selectOptionContents[i].classList.add("active");
		} else {
			selectOptionContents[i].classList.add("hidden");
			selectOptionContents[i].classList.remove("active");
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
			options[i].getAttribute("select-option-id").toUpperCase() ==
			value.toUpperCase()
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
	for (let i = 0; i < selectOptionContents.length; i++) {
		selectOptionContents[i].classList.remove("active");
		selectOptionContents[i].classList.add("hidden");
	}
	callback();
}

//

//Function to check URL
function getSelectOptionIDfromURL() {
	currentUrl = window.location.href;
	IDinUrl = currentUrl.split("#")[1];
	if (IDinUrl) {
		stationName = IDinUrl
		
		changeSelectOptionText(stationName);
		openSelection(stationName);
	} else {
		console.log("no Station ID found in url");
	}
}

//on load hide elements

onload = (event) => {
	hideAllOnLoad(getSelectOptionIDfromURL);

	// on load - if there is #id at the end of url
};

//click event for drop down select

for (let i = 0; i < options.length; i++) {
	options[i].addEventListener("click", (event) => {
		// event.preventDefault();

		openSelection(event.target.getAttribute("select-option-id"));

		changeSelectOptionText(event.target.getAttribute("select-option-id"));
		//here
	});
}
