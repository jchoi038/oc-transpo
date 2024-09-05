/* toc start */
let toc = document.getElementsByClassName("toc");
let sections = document.getElementsByClassName("section");
// toc.className = "toc--list";

if (toc) {
	let toc_container = document.createElement("nav");
	toc_container.className = "toc__container"
	toc[0].appendChild(toc_container);

	let toc_title = document.createElement("p");
	toc_title.className = "toc__title";

	if (checkPageLanguage() === "french"){
		toc_title.textContent = "Sur cette page";
	} else {
		toc_title.textContent = "On this page";
	}
	toc_container.appendChild(toc_title);


	let toc_items = document.createElement("ul");
	toc_items.className = "toc__items"
	toc_container.appendChild(toc_items);

	//adds updated sections to toc list on every load
	addEventListener("load", (event) =>{
		for (let i = 0; i < sections.length; i++) {
			// warning if id is empty
			if (sections[i].id == "") {
				console.log(
					"Warning: Section no." +
					i +
					" does not have an id"
					);
				} else {
					var toc_li = document.createElement("li");
					var toc_link = document.createElement("a");
					var href = "#" + sections[i].id;
					toc_link.href = href;
					toc_link.className = "toc__link";
					toc_link.innerHTML = sections[i].getElementsByTagName("h2")[0].innerHTML;
					toc_li.appendChild(toc_link)
					toc_items.appendChild(toc_li);
				}

		}
	})
	

	window.addEventListener("scroll", function () {
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


function checkPageLanguage(){
	currentUrl = window.location.href;
	console.log(currentUrl)
	if(currentUrl.indexOf("/fr/") != -1){
		return ("french")
	}
	return ("english")
}


/* end toc */