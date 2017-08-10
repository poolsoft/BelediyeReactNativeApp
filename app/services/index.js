var url = 'http://devloop.necmettincimen.com/index.php/api/query/';

var devLoop = {
    getAllByQuery(query) {
        return fetch(url + query).then((response) => response.json())
    }
}

export default devLoop;