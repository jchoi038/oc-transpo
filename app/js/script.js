
    // toc
    let toc = document.getElementsByClassName("toc--list");
    let sections = document.getElementsByTagName("section");
    
    toc.className = "toc--list";
    
    for (let i = 0; i < sections.length; i++) {
        var toc_link = document.createElement("a");
        var link = "#" + sections[i].id;
        console.log(sections[i].id);
        toc_link.href = link;
        toc_link.className = "toc__link";
        toc_link.textContent =
            sections[i].getElementsByTagName("h2")[0].textContent;
        toc[0].appendChild(toc_link);
    }
    

    window.addEventListener("scroll", function () {
        console.log("offset=", sections[1].offsetTop)
        console.log("scroll=", this.scrollY)
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]
            let sectionDistance = section.offsetTop
            let toc_links = document.getElementsByClassName("toc__link")
            if (this.scrollY-303 > sectionDistance) {
                section.classList.add("visible");
                let a = section.getAttribute("id");
                for (let j = 0; j < toc_links.length; j++){
                    let b = toc_links[j].href.split("#")[1]
                    if (b == a) {
                        toc_links[j].classList.add("active");
                    } else {
                        toc_links[j].classList.remove("active");
                    }
                }
            } else{
                section.classList.remove("visible");
            }
        }
    })
                    