const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Server static content
app.use( express.static('./public') );
app.get('/', function (req, res) {
  res.render( 'home', {
    name: 'Javiko',
    title: 'Node course'
  } );
});
app.get('/generic', function (req, res) {
  res.render( 'generic', {
    name: 'Javiko',
    title: 'Node course'
  } );
});
app.get('/elements', function (req, res) {
  res.render( 'elements', {
    name: 'Javiko',
    title: 'Node course'
  } );
});
// app.get('/generic', function (req, res) {
//   res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements', function (req, res) {
//   res.sendFile(__dirname + '/public/elements.html');
// });
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})