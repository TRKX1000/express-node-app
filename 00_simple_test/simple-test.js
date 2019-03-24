const express = require('express');

//Express App
const app = express();

//Response
const response1 = require('./responses/usersResponse.json');

//Get Method
app.get('/fetchUsers', (req, res) => res.send(response1));

app.listen(9999, () => console.log('Mocks server listening on port 9999!'));