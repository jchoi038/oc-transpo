var dynamicArea = document.getElementById("dynamic-area")
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

var line1Stations = [3060, 3027, 3026, 3023, 3022, 3051, 3052, 3010, 3009, 3025, 3024, 3011, 3021];
var line2Stations = [3060, 3067, 5813, 3065, 3061, 3037, 3041, 3068, 3063, 3038, 3036];
var line4Stations = [3039, 3038, 3069];
var busStations = [3045, 3017, 3050, 3060, 3049, 3034, 3059, 5813, 3074, 3013, 3055, 3043, 3037, 3035, 3023, 3057, 3016, 3070, 3022, 3041, 3068, 3014, 3046, 3030, 3051, 3000, 3047, 3076, 3042, 3063, 3048, 3052, 3010, 3019, 3028, 3033, 3015, 3009, 3032, 3040, 3031, 3038, 3025, 3044, 3018, 3058, 3024, 3029, 3011, 3021, 3036, 3012]

fetch("/data/stationStops.json")
    .then( response => response.json())
    .then(stationdata => {
        // sort station data alphabetically
        stationdata.sort(function (a,b) {
            if (a.station_560 < b.station_560) {
                return -1
            }
            if (a.station_560 > b.station_560) {
                return 1
            }
            return 0
        })
        //populating dymanic text area...
        for (var station of stationdata ){
            var section = document.createElement("section")
            let section_table = document.createElement("section")
            var station_name = document.createElement("h2")
            var station_560 = document.createElement("strong")
            var disclaimer = document.createElement("p") 
            var desc = document.createElement("p")
            var banner = document.createElement("div")
            var info = document.createElement("div")
            station_560.textContent = station.station_560
            console.log(station_560)
            /** uncomment for description**/
            // desc.textContent = station.station_desc
            // disclaimer.textContent = ""

            /** uncomment for banner, info note**/
            // banner.classList.add("banner")
            // banner.classList.add("banner--nwtb")
            // banner.innerHTML = 
            // `<div class="banner__content">
            //     <p class="banner__title">New Ways to Bus Are Coming Your Way</p>
            //     <p class="banner__body">
            //         Frequent. Local. Connected.
            //     </p>
            //     <a class="btn btn__arrow btn-white borderless" href="https://www.octranspo.com/en/plan-your-trip/service-changes/new-ways-to-bus">
            //         Learn more
            //     </a>
            // </div>`
            
            /** uncomment for info note**/
            // info.classList.add("note")
            // info.classList.add("note__type--info")
            // info.innerHTML = 
            // `
            //     <p class="note__title">The following stops and services will take effect on xx date</p>
            //     <p class="note__body"></p>
                
            // `
            
            


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
            section.appendChild(station_560)
            section.appendChild(desc)
            section.appendChild(disclaimer)
            section.appendChild(info)
            section.appendChild(section_table)
            section.classList.add('section')
            section.classList.add('station-section')
            section.setAttribute("id", station.station_name)
            

            section.appendChild(banner)
        }
        
        // let span_s = document.getElementById("dynamic-area").getElementsByTagName('span')
        // let routeNumbers = getRouteNumber(span_s)
        // addRouteClass(routeNumbers, span_s)
    })

function createCommaSeperatedtoArray(originalString){
    return separatedArray = originalString.split(', ');
}

// function getRouteNumber(data){
//     let routeNumbers = []
//     for(let i = 0; i < data.length; i++){
//         routeNumbers[i] =  data[i].textContent
//     }
//     return routeNumbers
    
// }

// function addRouteClass(routeNumbers, span_s){
//     for(let i = 0; i < span_s.length; i++){
//         span_s[i].classList.add('rt') 
//         span_s[i].classList.add('rt-type--'+routeNumbers[i]) 
//     }
// }

