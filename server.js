// server
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 5000);

// Our first route
app.get('/', function (req, res) {
    res.send('Hello Node + GitHub! This code push has auto-deployed!');
});

// Listen to port
app.listen(app.get('port'), function () {
    console.log('App is listening on port ' + app.get('port'));
});