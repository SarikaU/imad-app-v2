var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    
    'article-1':{ 
                    title: 'Article 1 Demo',
                    heading: 'Article 1',
                    date:'Feb 27, 2017',
                    content:` <p>
                                    This is the content of my first article.
                              </p>
                              <p>
                                    Structuring the contents to display.
                              </p>
                              <p>
                                     Its a simple webpage.
                              </p>`
        
    },
   'article-2':{ 
                    title: 'Article 2 Demo',
                    heading: 'Article 2',
                    date:'Feb 28, 2017',
                    content:` <p>
                                    This is the content of my second article.
                              </p>
                              <p>
                                    Structuring the contents to display.
                              </p>
                              <p>
                                    Its a simple webpage.
                              </p>`

    },
   'article-3':{ 
                    title: 'Article 3 Demo',
                    heading: 'Article 3',
                    date:'March 01, 2017',
                    content:` <p>
                                    This is the content of my third article.
                              </p>
                              <p>
                                    Structuring the contents to display.
                              </p>
                              <p>
                                    Its a simple webpage.
                              </p>`
        
    }
    
};


function createTemplate(data){
    
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;


var htmlTemplate = `<html>
    
    <head>
          <title>
                  ${title}
          </title>
          <meta name="viewport" content="width=device-width,initial scale=1">
          <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
                <div>
                    <a href="/">home</a>
                </div>
                <hr/>
                <h1>
                    ${heading}
                </h1>
                <div>
                    ${date}
                </div>
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
 res.sendFile(path.join(__dirname,'ui','index.html'));
 
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

var counter=0;
app.get('/counter',function(req,res){
    counter= counter+1;
    res.send(counter.toString());
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));  
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
