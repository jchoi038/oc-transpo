var dynamicArea = document.getElementById("dynamic-area")
fetch("/data/stationStops.json")
    .then( response => response.json())
    .then(stationdata => {
        // sort station data alphabetically
        stationdata.sort(function (a,b) {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        //populating dymanic text area...
        for (var station of stationdata ){
            var section = document.createElement("section")
            let section_table = document.createElement("section")
            var station_name = document.createElement("h2")
            var h2 = document.createElement("h3") 
            var disclaimer = document.createElement("p") 
            var desc = document.createElement("p")
            var banner = document.createElement("div")
            var info = document.createElement("div")
            banner.classList.add("banner")
            banner.classList.add("banner--nwtb")
            info.classList.add("note")
            info.classList.add("note__type--info")
            h2.textContent = "New stops and service"
            desc.textContent = station.station_desc
            disclaimer.textContent = ""
            banner.innerHTML = 
            `<div class="banner__content">
                <p class="banner__title">New Ways to Bus Are Coming Your Way</p>
                <p class="banner__body">
                    Frequent. Local. Connected.
                </p>
                <a class="btn btn__arrow btn-white borderless" href="https://www.octranspo.com/en/plan-your-trip/service-changes/new-ways-to-bus">
                    Learn more
                </a>
            </div>`
            info.innerHTML = 
            `
                <p class="note__title">Effective xx date: The following stops and services will replace the current.</p>
                <p class="note__body"></p>
                
            `
            
            


            //create line 1 icon
            let line1Icon = document.createElement("span")
            line1Icon.classList.add('rt', 'rt-type--line1')
            line1Icon.textContent = "1"
            //create line 2 icon
            let line2Icon = document.createElement("span")
            line2Icon.classList.add('rt', 'rt-type--line2')
            line2Icon.textContent = "2"
            //create line 4 icon
            let line4Icon = document.createElement("span")
            line4Icon.classList.add('rt', 'rt-type--line4')
            line4Icon.textContent = "4"
            // create p element for station name
            let stationName = document.createElement("p")
            stationName.setAttribute("style","display: inline;")
            stationName.textContent = station.station_name
            // check and mark line 1 stations
            if (station.station_type.line_1 == true){
                station_name.appendChild(line1Icon)
            }
            //check for line 2 stations
            if (station.station_type.line_2 == true){
                station_name.appendChild(line2Icon)
            }
            //check for line 4 stations
            if (station.station_type.line_4 == true){
                station_name.appendChild(line4Icon)
            }

            
            station_name.appendChild(stationName)
            dynamicArea.appendChild(section)
            section.appendChild(station_name)
            section.appendChild(desc)
            section.appendChild(h2)
            section.appendChild(disclaimer)
            section.appendChild(info)
            section.appendChild(section_table)
            section.classList.add('section')
            section.classList.add('station-section')
            section.setAttribute("id", station.station_name)
            

            for (var stop of station.stops ){
                section_table.classList.add('grid--2col')
                let table = document.createElement("table")
                let thead = document.createElement("thead")
                let tr = document.createElement("tr")
                let tbody = document.createElement("tbody")
                thead.appendChild(tr)
                table.appendChild(thead)
                table.appendChild(tbody)
                table.classList.add("light")
                table.classList.add("station-table")
                let row_stopName = document.createElement("th")
                let routes = createCommaSeperatedtoArray(stop.routes)
                row_stopName.textContent = stop.stop_name
                tr.appendChild(row_stopName)
                section_table.appendChild(table)
                section.appendChild(section_table)
                
                for (var route of routes){
                    let row = document.createElement("tr")
                    let cell = document.createElement("td")
                    if (route.split(" ")[0] > 4){
                        let route_icon = route.split("[")[1].replace("]","")
                        console.log(route_icon)
                        switch (route_icon) {
                            case 'BLU' : route_icon = "frequent"
                            case 'BOW' :
                            case 'GRY' :
                            case 'GOW' :
                            case 'PUR' :
                        }
                    }
                    route = route.split("[")[0]
                    cell.textContent = route

                    // replace the first word (which is the route number) of each cell to wrap with <span>
                    cell.innerHTML = cell.textContent.replace(/^(<[^\/]*[^>]*>)*(\w+\b)/g, '$1<span>$2</span>')
                    
                    row.appendChild(cell)
                    tbody.appendChild(row)
                }
            }
            section.appendChild(banner)
        }
        
        let span_s = document.getElementById("dynamic-area").getElementsByTagName('span')
        let routeNumbers = getRouteNumber(span_s)
        addRouteClass(routeNumbers, span_s)
    })

function createCommaSeperatedtoArray(originalString){
    return separatedArray = originalString.split(', ');
}

function getRouteNumber(data){
    let routeNumbers = []
    for(let i = 0; i < data.length; i++){
        routeNumbers[i] =  data[i].textContent
    }
    return routeNumbers
    
}

function addRouteClass(routeNumbers, span_s){
    for(let i = 0; i < span_s.length; i++){
        span_s[i].classList.add('rt') 
        span_s[i].classList.add('rt-'+routeNumbers[i]) 
    }
}

