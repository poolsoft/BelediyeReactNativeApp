var url = 'http://devloop.necmettincimen.com/index.php/api/query/';
var mapUrl = 'https://maps.googleapis.com/maps/api/';
var mapApiKey = 'AIzaSyCcQeBLvtAo1ESNQhzyvSFXR9ab92HBvWw';

var devLoop = {
    getAllByQuery(query) {
        return fetch(url + query).then((response) => response.json())
    },
    getAllMapPlacesByQuery(query) {
        return fetch(mapUrl + 'place/textsearch/json?query='+ query +'%20in%20malatya&key='+mapApiKey).then((response) => response.json())
    }
}

export default devLoop;