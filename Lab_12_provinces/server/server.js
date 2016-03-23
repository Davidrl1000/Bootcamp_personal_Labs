var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('./variables');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

app.listen(3001);

app.get('/provinces', function (req, res) {

  res.json(data.provinces);

});

app.get('/provinces/:id', function(req, res){

  for (var i = 0; i < data.provinces.length; i++) {
    if(data.provinces[i].id == req.params.id){
      res.json(data.provinces[i]);
    }//end if
  }//end for

  res.json({});
});

app.post('/provinces', function(req, res) {

  res.status(500).send('Something broke!');

});

app.put('/provinces', function(req, res) {
  res.status(500).send('Something broke!');
});

app.delete('/provinces', function(req, res) {

  res.status(500).send('Something broke!');

});

console.log('on port 3001');
