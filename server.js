var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article_one':{
    title:'Article One | Meeenakshi',
    heading:'Article One',
    date:'Sep 24, 2016',
    content:`
        <p>
            This is the content in my first page...
        </p>
        <p>
           This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page... 
        </p>
        <p>
            This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...This is the content in my first page...
        </p>`
},
'article_two':{
    title:'Article two | Meeenakshi',
    heading:'Article Two',
    date:'Sep 24, 2016',
    content:`
        <p>
            This is the content in my second page...
        </p>
        <p> This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page...
        </p>
        <p>
             This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page... This is the content in my second page...
        </p>`
},
'article_three':{
    title:'Article three | Meeenakshi',
    heading:'Article Three',
    date:'Sep 24, 2016',
    content:`
        <p>
            This is the content in my third page...
        </p>
        <p> This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..
        </p>
        <p>
             This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..This is the content in my third page..
        </p>`
},
};

function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`<html>
  <head>
  <title>
   ${title}
   <meta name="viewport" content="width=device-width,initial scale=1"/>
   <link href="/ui/style.css" rel="stylesheet" />
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
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {

    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
