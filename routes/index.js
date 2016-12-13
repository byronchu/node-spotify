var express = require('express');

// cont {searchArtists, searchTracks } = require('../lib/spotify-api')
const spotifyAPI = require('../lib/spotify-api')



var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/artists/:name', function(req, res, next) {
  const { name } = req.params;
  spotifyAPI.searchArtists(name)
  .then((artists) => {
    res.json(artists);
  })
  .catch((error) => {
    next(error);
  });
//  res.render('index', { title: 'Express' });
});



router.get('/', function(req, res, next) {
  res.render('/tracks/:name', { title: 'Express' });
});





module.exports = router;
