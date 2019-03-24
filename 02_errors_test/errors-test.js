const express = require('express');

//Express App
const app = express();

//Response
const response = require('./responses/response.json');

//GET Method
app.get('/error/:error', (req, res) => {

    //dispatch response based on error param url
    switch(req.params.error){
        case "200":{
            res.status(200).send(response);
            break;
        }
        case "400":{
            res.status(400).send(response);
            break;
        }
        case "500":{
            res.status(500).send(response);
            break;
        }
        case "503":{
            res.status(503).send(response);
            break;
        }
        default:{
            res.status(404).send(response);
        }
    }
});



app.listen(9999, () => console.log('Mocks server listening on port 9999!'));