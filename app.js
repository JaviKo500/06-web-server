const express = require('express');
const app = express();
const port = 3000;

// Server static content
app.use( express.static('./public') );

app.get('/hello-world', function (req, res) {
  res.send('Hello World');
});
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})