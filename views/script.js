let createbird = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status
}

// todo save these to a databse
console.log(createbird);

res.render ('bird-created');

res.redirect('/birds');
