const express = require('express');
const { byZip } = require('./zipData');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
   res.json(zipdb.byZip[req.params.zipcode])
});


app.get('/city/:cityname', (req, res) => {
 res.json(zipdb.byCity[req.params.cityname])
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
