var express = require('express');
var cors = require('cors');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(__dirname+'/public'));

 app.listen(PORT, function () {
        console.log("Server is running on port: " + PORT);
});