const axios = require('axios');

/*exports.get_birds = function(req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(function (response) {
        res.render('/birds', { birds: response.data });
      })
}*/

/*exports.get_create_birds = function(req, res) {
    res.render('birds');
}*/


exports.post_create_birds = function(req, res) {
      // format as json to save to databse:
    let createbirds = {
        species: req.body.species,
        nickname: req.body.nickname,
        status: req.body.status
    }

    // todo save these to a databse
    console.log(createbirds);


    // what next?
    res.redirect('/birds');
}

