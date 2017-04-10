const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const AWS = require('aws-sdk');
const YQL = require('yql');
const isDeveloping = process.env.NODE_ENV !== 'production';
// const option = AWS.config.loadFromPath('./config.json');
// const option = require('./config.json');
if (!isDeveloping) {
  AWS.config.update({
    accessKeyId: process.env.S3_KEY, 
    secretAccessKey: process.env.S3_SECRET, 
    region: process.env.S3_REGION
  });
}

var s3 = new AWS.S3();

var params = { 
  Bucket: 'babymomo',
  Delimiter: '/',
};
  
app.use(express.static(path.join(__dirname, '/../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/api/images', (req, res)=>{
  s3.listObjects(params, function (err, data) {
    if (err) { throw err; }
    res.send(data);
  });
});

let query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text in ("san francisco, ca", "pleasanton, ca", "dublin, ca", "palo alto, ca", "san mateo, ca", "berkeley, ca","oakland, ca","san jose, ca"))');

app.get('/api/weather', (req, res)=>{
  query.exec(function(err, data) {
    if (err) { throw err; }
    res.send(data);
  }); 
});

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
  console.log('listening port', port);
});