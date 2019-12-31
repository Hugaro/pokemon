const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static('./client/dist/pokemon/'));
 
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/dist/pokemon/');
});
 
var listener = app.listen(process.env.PORT || 4200, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});