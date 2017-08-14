var url = 'http://devloop.necmettincimen.com/index.php/api/query/';
var mapUrl = 'https://maps.googleapis.com/maps/api/';
var mapApiKey = 'AIzaSyCcQeBLvtAo1ESNQhzyvSFXR9ab92HBvWw';

var devLoop = {
    getAllByQuery(query) {
        return fetch(url + query).then((response) => response.json())
    },
    getAllMapPlacesByQuery(query) {
        return fetch(mapUrl + 'place/nearbysearch/json?location=38.348615,38.294145&radius=5000&type=' + query + '&key=' + mapApiKey).then((response) => response.json())
    }
}

export default devLoop;