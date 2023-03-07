var express = require('express');
var app = express();
app.use(express.json());

app.get("/", (req, res) => {
    console.log( req );
    res.send( 'ok' );
});

app.post('/addUser', function (req, res) {
     console.log( req.body );
    //res.end( JSON.stringify(data));
    res.send('ok');
});

app.delete('/deleteUser', function (req, res) {

});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})