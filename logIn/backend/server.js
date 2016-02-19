/**
 * Created by Vibhav on 2/15/2016.
 */
var express = require('express');
var app = express();
var path = require('path');
var root = path.normalize(__dirname + '/..');
app.use(express.static(path.join(root, 'frontend')));
app.set('appPath', path.join(root, 'frontend'));
app.route('/welcome/:name')
    .get(function(req, res) {
        res.send("welcome to"+ req.params.name+ " Vibhav's server");
    });

app.route('/welcome')
    .get(function(req, res) {
        res.send("welcome to Vibhav's server");
    });

app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});