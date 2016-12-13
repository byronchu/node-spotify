const URL = require('url')
const fetch = require('node-fetch');

//make a function
//q is for the query
function loadApi(type, q) {


  //create a url
  const url = URL.format({
    protocol: 'https:',
    host: 'api.spotify.com',
    pathname: '/v1/search',
    query: { type, q }

  })

//fetch returns a promise
  return fetch(url)
  //returns a promise
  .then((response) => {
    return response.json();
  })

}

// returns a promise

//returns a huge json
function searchArtists(name){
  return loadApi('artist', name)
  .then((json) => {   //then returns json
    console.log('artists json', json);
     return json.artists.items;
  });
}

function searchTracks(name){
  return loadApi('track', name)
  .then((json) => {   //then returns json
     return json.tracks.items;     //json is a object has property item which has an array
  });
}

//export

module.exports = {
  searchArtists,
  searchTracks
};
