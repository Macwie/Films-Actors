var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//DB id's
var filmId = 2;
var actorId = 2;
var connectorId = 2;

//DB
var films = [{
    id: 1,
    title: "Tytuł",
    year: "2000",
    country: "kraj",
    director: "reżyser",
    image: "http://1.fwcdn.pl/po/74/44/757444/7819422.6.jpg",
    genre: "Komedia",
    actors: []

  },
  {
    id: 2,
    title: "Tytuł2",
    year: "2002",
    country: "kraj2",
    director: "reżyser2",
    image: "http://1.fwcdn.pl/po/74/44/757444/7819422.6.jpg",
    genre: "Obyczajowy",
    actors: []
  }
];

var connector = [{
    filmId: 1,
    actorId: 1
  },
  {
    filmId: 2,
    actorId: 2
  }
];

var actors = [{
    id: 1,
    name: "kimie",
    surname: "znazwisko",
    birth: "2012-06-07",
    image: "http://1.fwcdn.pl/p/79/16/7916/389758.1.jpg",
    height: "170 cm",
    prizes: ["nagroda1", "nagroda2"],
    films: []
  },
  {
    id: 2,
    name: "imie2",
    surname: "nazwisko2",
    birth: "2009-10-17",
    image: "http://1.fwcdn.pl/p/79/16/7916/389758.1.jpg",
    height: "150 cm",
    prizes: ["nagroda3", "nagroda4"],
    films: []
  }
];

// <-------films webservices------>

//Make connections
  for(var i=0;i<films.length;i++){
    for(var j=0;j<connector.length;j++){
      if(connector[j].filmId == films[i].id) {
        films[i].actors.push({id: actors[connector[j].actorId-1].id, name: actors[connector[j].actorId-1].name, surname: actors[connector[j].actorId-1].surname});
      }
    }
  }

  for(var i=0;i<actors.length;i++){
    for(var j=0;j<connector.length;j++){
      if(connector[j].actorId == actors[i].id) {
        actors[i].films.push({id: films[connector[j].filmId-1].id, title: films[connector[j].filmId-1].title});
      }
    }
  }

//Get all films
app.get('/films', function(req, res) {
  console.log('Sending film list...');
  res.json(films);
});

//Get specific film
app.get('/films/:id', function(req, res) {
  console.log('Sending specific film...');
  var index = findObject("films", parseInt(req.params.id, 10));
  if (index === null) {
    res.send(404);
  } else {
    res.send(films[index]);
  }
});

//Add new film
app.post('/films', function(req, res) {
  var film = req.body;
  console.log('Adding film: ' + JSON.stringify(film));
  film.id = ++filmId;
  films.push(film);
  for(var i=0;i<film.actors.length;i++) {
    connector.push({filmId: film.id, actorId: film.actors[i].id});
  }
  res.send(film);
});

//Edit film
app.put('/films/:id', function(req, res) {
  var film = req.body;
  console.log('Editing film: ' + JSON.stringify(film));
  var index = findObject("films", parseInt(req.params.id, 10));
  if (index === null) {
    res.send(404);
  } else {
    var id = films[index].id;
    films[index] = film;
    films[index].id = id;
    res.send(film);
  }
});

//Delete film
app.delete('/films/:id', function(req, res) {
  console.log('Deleting film: ' + req.params.id);
  var index = findObject("films", parseInt(req.params.id, 10));
  if (index === null) {
    res.send(404);
  } else {
    removeObject("films", parseInt(req.params.id, 10));
    res.send(films);
  }
});

// <------- END of films webservices------>

// <-------actors webservices------>

//Get all actors
app.get('/actors', function(req, res) {
  console.log('Sending actors list...');
  res.json(actors);
});

//Get specific actor
app.get('/actors/:id', function(req, res) {
  console.log('Sending specific actor...');
  var index = findObject("actors", parseInt(req.params.id, 10));
  if (index === null) {
    res.send(404);
  } else {
    res.send(actors[index]);
  }
});

//Add new actor
app.post('/actors', function(req, res) {
  var actor = req.body;
  console.log('Adding actor: ' + JSON.stringify(actor));
  actor.id = ++actorId;
  actors.push(actor);
  res.send(actor);
});

//Edit actor
app.put('/actors/:id', function(req, res) {
  var actor = req.body;
  console.log('Editing actor: ' + JSON.stringify(actor));
  var index = findObject("actors", parseInt(req.params.id, 10));
  if (index === null) {
    res.send(404);
  } else {
    var id = actors[index].id;
    actors[index] = actor;
    actors[index].id = id;
    res.send(actor);
  }
});

//Delete actor
app.delete('/actors/:id', function(req, res) {
  console.log('Deleting actor: ' + req.params.id);
  var index = findObject("actors", parseInt(req.params.id, 10));
  if (index === null) {
    res.send(404);
  } else {
    removeObject("actors", parseInt(req.params.id, 10));
    res.send(actors);
  }
});

// <------- END of actors webservices------>

//Find film/actor in DB
function findObject(type, id) {
  var objects;

  if (type === "films")
    objects = films;
  else if (type === "actors")
    objects = actors;
  else {
    console.log("Wrong type!");
    return;
  }

  for (var i = 0; i < objects.length; i++) {
    if (objects[i].id === id) {
      return i;
    }
  }
  return null;
}

//Remove film/actor from DB
function removeObject(type, id) {

  var objects;

  if (type === "films")
    objects = films;
  else if (type === "actors")
    objects = actors;
  else {
    console.log("Wrong type!");
    return;
  }

  var index = 0;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].id === id) {
      index = i;
    }
  }
  objects.splice(index, 1);
}


var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://%s:%s", host, port);
})
