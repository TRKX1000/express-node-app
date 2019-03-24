const express = require('express');

//Express App
const app = express();

//Response
const responseGET = require('./responses/getResponse.json');
const responsePATCH = require('./responses/patchResponse.json');
const responsePUT = require('./responses/putResponse.json');
const responseDELETE = require('./responses/deleteResponse.json');

//GET Method
app.get('/getMethod', (req, res) => res.send(responseGET));

//PATCH Method
app.patch('/patchMethod', (req, res) => res.send(responsePATCH));

//PUT Method
app.put('/putMethod', (req, res) => res.send(responsePUT));

//DELETE Method
app.delete('/deleteMethod', (req, res) => res.send(responseDELETE));

app.listen(9999, () => console.log('Mocks server listening on port 9999!'));