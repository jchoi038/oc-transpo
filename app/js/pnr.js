
// get list of elements with the class="select-options"
options = document.getElementsByClassName("select-option");
pageLang = checkPageLanguage();


function checkPageLanguage(){
	currentUrl = window.location.href;
	console.log(currentUrl)
	if(currentUrl.indexOf("/fr/") != -1){
		return ("french")
	}
	return ("english")
}

// english
if (pageLang == "english"){
// add pnr icons to select options english
for (let i = 0; i < options.length; i++) {
	var iconsContainer = options[i].getElementsByClassName("icons");
	var iconSwitch = iconsContainer[0].getAttribute("data-switch").split(" ");

	//create goldStar element
	const goldStar = document.createElement("img");
	goldStar.setAttribute("class", "gold-star");
	goldStar.setAttribute("alt", "blue star icon with a light blue background");
	goldStar.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/Service_gold-parking.svg"
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
		"https://www.octranspo.com/images/files/icons/tag_permit.svg"
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
		"https://www.octranspo.com/images/files/icons/tag_free.svg"
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
		"https://www.octranspo.com/images/files/icons/tag_freewithnote.svg"
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
		"https://www.octranspo.com/images/files/icons/alert_warning.svg"
	);
	quickTag.setAttribute("alt", "yellow triangle icon with a exclamation mark");
	quickTag.setAttribute("title", "This Park & Ride lot fills up quickly");


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
}


// french
if (pageLang == "french"){

// get tag value

for (let i = 0; i < options.length; i++) {
	var iconsContainer = options[i].getElementsByClassName("icons");
	var iconSwitch = iconsContainer[0]
		.getAttribute("data-switch")
		.split(" ");

	//create goldStar element
	const goldStar = document.createElement("img");
	goldStar.setAttribute("class", "gold-star");
	goldStar.setAttribute(
		"alt",
		"Icône d’une étoile se détache sur un fond bleu clair"
	);
	goldStar.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/Service_gold-parking.svg"
	);
	goldStar.setAttribute(
		"title",
		"On trouve dans ce parc relais des places de stationnement nécessitant un permis Or"
	);
	//create free tag element
	const permitTag = document.createElement("img");
	permitTag.setAttribute("class", "permit-tag");
	permitTag.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/tag_permit_fr.svg"
	);
	permitTag.setAttribute(
		"alt",
		"Le mot « Permis » écrit en bleu se détache sur un fond bleu clair."
	);
	permitTag.setAttribute(
		"title",
		"Il est nécessaire de détenir un permis pour stationner son véhicule dans ce parc relais"
	);

	const freeTag = document.createElement("img");
	freeTag.setAttribute("class", "free-tag");
	freeTag.setAttribute(
		"src",
		// "https://www.octranspo.com/images/files/icons/tag_free_en.svg"
		"https://www.octranspo.com/images/files/icons/tag_free_fr.svg"
	);
	freeTag.setAttribute(
		"alt",
		"Le mot « GRATUIT » écrit en vert se détache sur un fond vert clair."
	);
	freeTag.setAttribute(
		"title",
		"This Park & Ride lot offers free parking"
	);

	const freeTagLimited = document.createElement("img");
	freeTagLimited.setAttribute(
		"src",
		// "https://www.octranspo.com/images/files/icons/tag_free-limited_en_v2.svg"
		"https://www.octranspo.com/images/files/icons/tag_freewithnote-fr.svg"
	);
	freeTagLimited.setAttribute(
		"alt",
		"Le mot « GRATUIT » écrit en vert se détache sur un fond vert clair coupé par des lignes diagonales blanches."
	);
	freeTagLimited.setAttribute(
		"title",
		"This Park & Ride lot offers limited free parking"
	);

	const quickTag = document.createElement("img");
	quickTag.setAttribute(
		"src",
		"https://www.octranspo.com/images/files/icons/alert_warning.svg"
	);
	quickTag.setAttribute(
		"alt",
		"Icône d’un triangle jaune doté d’un point d’exclamation"
	);
	quickTag.setAttribute(
		"title",
		"Ce parc de stationnement se remplit rapidement."
	);

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
}
