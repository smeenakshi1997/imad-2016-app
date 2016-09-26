var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article_one={
    title:'Article One | Meeenakshi',
    heading:'Sep 24, 2016'
    content:`<p>
            This is the content in my first page...
        </p>
        <p>
           This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page... 
        </p>
        <p>
            This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...
        </p>`
};
var htmlTemplate=`<html>
  <head>
  <title>
   ARTICLE ONE|MEENAKSHI
   <meta name="viewport" content="width=device-width,initial scale=1"/>
   </title>
   </head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>${date}</div>
    <div>
    ${content}
    </div>
    </div>
</body>  
</html>`
;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article_one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_one.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
