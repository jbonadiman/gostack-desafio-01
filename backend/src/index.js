const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

let requestCount = 0;

function countRequest(req, res, next) {
  console.log(`Number of requests: ${++requestCount}`);
  next();
};

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://root:admin@cluster0-shard-00-00-23um3.gcp.mongodb.net:27017,cluster0-shard-00-01-23um3.gcp.mongodb.net:27017,cluster0-shard-00-02-23um3.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(countRequest);
app.use(express.json());
app.use(routes);

console.log(`Listening on port ${PORT}...`);
app.listen(PORT);