/*
 * Minimal server
 */

var http = require('http');
var request = require('request');
var fs = require('fs');
var swig  = require('swig');

request('http://infinigag.k3min.eu/hot', function (error, response, body) {

    if (!error && response.statusCode == 200) {

       createServer(body);

    } else {
        console.log(error);
    }
})

function createServer(body){

    http.createServer(function (req, res) {

        if (req.url == '/') {

            parseArticles(res,body);

        }

    }).listen(8000, "127.0.0.1");

}//end createServer

function parseArticles(res,body){

    var articles = getArray(JSON.parse(body.toString()));

    var tmpl = swig.compileFile('./template.html'),
        renderedHtml = tmpl({
            articles: articles
        });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(renderedHtml);

}//end parseArticles

function getArray(articles){
    var arr = [];

    for (var i=0;i<articles.data.length;i++) {
        var newObj ={
            caption: articles.data[i].caption,
            link: articles.data[i].link,
            image: articles.data[i].images.normal,
            media: articles.data[i].media.mp4
        };
        arr.push(newObj);
    }

    return arr;
}//end getArray
