var express = require('express');
var app = express();

var schema = require('./schema');
var graphql = require('graphql');
var bodyParser = require('body-parser');

app.use(bodyParser.text({
  type: 'application/graphql'
}));

app.post('/graphql', (req, res) => {
  graphql.graphql(schema, req.body)
    .then((result) => {
      res.send(JSON.stringify(result, null, 2));
    });
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});