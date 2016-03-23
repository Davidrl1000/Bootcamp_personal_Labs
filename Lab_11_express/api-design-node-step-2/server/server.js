// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

app.listen(3000);

app.get('/lions', function (req, res) {

  res.json(lions);

});

app.get('/lions/:id', function(req, res){

  for (var i = 0; i < lions.length; i++) {
    if(lions[i].id == req.params.id){
      res.json(lions[i]);
    }//end if
  }//end for

  res.json({});
});

app.post('/lions', function(req, res) {

  id++;
  var temp = req.body;
  temp.id=id;
  lions.push(req.body);
  res.json(temp);

});

app.put('/lions', function(req, res) {

  var temp = req.body;

  for (var i = 0; i < lions.length; i++) {
    if(lions[i].id == temp.id){
      lions[i].name = temp.name;
      lions[i].pride = temp.pride;
      lions[i].age = temp.age;
      lions[i].gender = temp.gender;
      i=lions.length+1;
    }//end if
  }//end for

  res.json(lions);
});

app.delete('/lions', function(req, res) {

  var temp = req.body;

  for (var i = 0; i < lions.length; i++) {
    if(lions[i].id == temp.id){
      lions.splice(i, 1);
      i=lions.length+1;
    }//end if
  }//end for

  res.json(lions);
});

console.log('on port 3000');
