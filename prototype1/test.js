ymaps.ready(init);
let playerGuess;
let player;
let map;
let placeIndex;
let timeSeconds = 0;

function openRandomPanorama(){
	placeIndex = Math.floor(Math.random() * points.length);
    let coordinates = [points[placeIndex]['latitude'], points[placeIndex]['longitude']];
    player.moveTo(coordinates).then(()=>{}, () => console.log('gay'));
    console.log(player);
    console.log(coordinates);
    map.geoObjects.removeAll();
}

async function initPanorama() {
	placeIndex = Math.floor(Math.random() * points.length);
    let coordinates = [points[placeIndex]['latitude'], points[placeIndex]['longitude']];

    ymaps.panorama.locate(coordinates).then(
        function(panoramas) {
            if (panoramas.length > 0) {
                player = new ymaps.panorama.Player('player1', panoramas[0], {
                    suppressMapOpenBlock: true,
                    controls: ['fullscreenControl', 'zoomControl']
                });
                player.getPanorama().__proto__.getMarkers = () => {return [];};
                return	player;
            } else {
                initPanorama();
            }
        },
        function(error) {
            console.log(points[placeIndex]);
        }
    );

}

function calculateDifference(point1, point2){
	return ymaps.coordSystem.geo.getDistance(point1, point2);	
}

function endRound(){
	console.log(player);
	const lineCoordinates = [
		[points[placeIndex]['latitude'], points[placeIndex]['longitude']], 
        playerGuess
	];
	let line = new ymaps.Polyline(
	    lineCoordinates, 
	    {},
	    {
	        strokeColor: "#FF0000",
	        strokeWidth: 0,
	        strokeOpacity: 1
	    }
	);
	correctPoint = new ymaps.Placemark(lineCoordinates[0], {}, {
        preset: 'islands#circleIcon',
        iconColor: 'red'
    })
    map.geoObjects.add(correctPoint);
	map.geoObjects.add(line);
	map.setBounds(line.geometry.getBounds(), {
		zoomMargin: 100,
		duration: 500
	}).then(() => {
		map.geoObjects.remove(line);
		line = new ymaps.Polyline(
		    lineCoordinates, 
		    {},
		    {
		        strokeColor: "#FF0000",
		        strokeWidth: 3,
		        strokeOpacity: 1
		    }
		);
		map.geoObjects.add(line);
	});
	
	setTimeout(showDistance, 2000);
}
async function init() {
   	
   	setInterval(() => {
   		timeSeconds++;
   		const timer = document.getElementById('timer');
   		const minutes = Math.floor(timeSeconds / 60);
    	const seconds = timeSeconds % 60;
    	timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
    map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 2,
        controls: ['zoomControl']
    }, {
    	suppressMapOpenBlock: true,
        yandexMapDisablePoiInteractivity: true,
        
    });
    
    map.events.add('click', function(e) {
        playerGuess = e.get('coords');
        map.geoObjects.removeAll();
        newOne = new ymaps.Placemark(playerGuess, {}, {
            preset: 'islands#circleIcon',
            iconColor: 'green'
        })
        map.geoObjects.add(newOne);
    });
    player = await initPanorama();
    console.log(player)
}

function showDistance() {
    const overlay = document.getElementById('transitionOverlay');
    const distanceDisplay = document.getElementById('distanceDisplay');
    const distance = calculateDifference([points[placeIndex]['latitude'], points[placeIndex]['longitude']], 
        playerGuess); 
    distanceDisplay.textContent = `${(distance / 1000).toFixed(1)} km`;
    overlay.style.display = 'flex';
        setTimeout(() => {
        	openRandomPanorama();
            overlay.style.display = 'none';
            timeSeconds	= 0;
        }, 1000);

}

let startLati = -89;
let endLati = 89;
let startLong = 74;
let endLong = 75;
// let startLati = -89;
// let endLati = -88;
// let startLong = 72;
// let endLong = 73;

let stepLati = 0.2;
let stepLong = 0.2;
let currLati = startLati;
let currLong = startLong;
let goodCoords = [];
function getNextPoint() {
    if(currLong>endLong) {
        currLong = startLong;
        if(currLati>endLati)
        {
            return {end: true};
        } else {
            currLati+=stepLati;
        }
    } else {
        currLong+=stepLong;
    }
    return {end: false, latitude: currLati, longitude:currLong};
}

const options = {
    // рекомендуемое название файла
    suggestedName: 'results.txt',
    types: [
      {
        description: 'Text',
        accept: {
          'text/plain': '.txt'
        }
      }
    ],
    excludeAcceptAllOption: true
  }

async function searchBlock() {
    let res = getNextPoint();
    while(res.end==false) {
        let coordinates = [res.latitude, res.longitude];
        await player.moveTo(coordinates).then(()=>{
            goodCoords.push({latitude: res.latitude, longitude: res.longitude});
            console.log({coordinates});
        }, () => console.log('не подошла'));
    map.geoObjects.removeAll();
    res = getNextPoint();   
    }
    console.log(JSON.stringify(goodCoords, null, 2));
}

async function downloadResults() {
    const fileHandle = await window.showSaveFilePicker(options);
    const writableStream = await fileHandle.createWritable();

    await writableStream.write(JSON.stringify(goodCoords, null, 2));
    await writableStream.close();
}