// get the headlines from the API
// http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2020-06-02
window.onload = function() {
  // why to use window.onload?
  // The reason for waiting for the DOM to be loaded is so that you can target any elements that load after your script.
  // Let's say you were targeting a div that was in your markup after your script, you would get an error if you don't
  // wait for that piece of the DOM tree to load. So using window.onload almost keeps things in sync - none of these DOM elements
  // will be present unti the data from the API has been returned - which will happen the moment the file has loaded.
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2020-06-02')
  // fetch is the most common way to get an API.
  .then(function(response)
    { return response.json()})
    // We break it down into two methods == the first states that once we have fetched the API, we then call a RESPONSE function = where we grab the data
    // (the json).
  .then(function(data){
    // once we have returned the json, we are then able to format it with html in any way we want - which is why we call this second method.
    let div = document.getElementById('headlines')
//  document refers to the html doc. The variable we have references and grabs the element in our html file with the id "headlines".
    //
    for (let index = 0; index < data.response.results.length; index++) {
      const article = new Article(data.response.results[index]);
      div.appendChild(article.toNode())
    }
  });
}

class Article {
  constructor(data) {
    this.title = data.webTitle
    this.url = data.webUrl
  }
  toNode() {
    let node = document.createElement('div')
    let title = document.createElement('h2')
    title.innerText = this.title
    let link = document.createElement('a')
    link.innerText = 'See the Article'
    link.setAttribute('href', this.url)
    node.appendChild(title)
    node.appendChild(link)

    // this.fetchSummary(function(data){
    //   let text = document.createElement('p')
    //   text.innerText = data.text
    //   node.appendChild(text)
    // })
    return node
  }
  // example request to aylien api
  // curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/football/blog/2020/jun/02/my-favourite-game-perfect-view-of-another-liverpool-v-newcastle-classic"
  // fetchSummary(callback) {
  //   fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.url}`)
  //   .then(function(response) { return response.json()})
  //   .then(callback);
  // }
}



// var http = require('http');
// const express = require ('express');
// const bodyParser = require('body-parser');
//
// // What is the purpose of body-parser?
// //
// // In order to get access to the post data we have to use body-parser. Without body-parser, express purely sees the get data (the urls).
// // The body-parser allows express to read the body and then parse that into a Json object that we can understand. It grabs the body sections.
// // So we can read params etc.
//
// const app = express();


// server can also be in index.js

// const express = require('express');
// const bodyParser = require('body-parser');
//
// const app = express();
//
// app.use(bodyParser.json());
//
// app.get('/articles', (req, res) => {
//   const articles = [];
//   // code to retrieve an article...
//   res.json(articles);
// });
//
// app.post('/articles', (req, res) => {
//   // code to add a new article...
//   res.json(req.body);
// });
//
// app.put('/articles/:id', (req, res) => {
//   const { id } = req.params;
//   // code to update an article...
//   res.json(req.body);
// });
//
// app.delete('/articles/:id', (req, res) => {
//   const { id } = req.params;
//   // code to delete an article...
//   res.json({ deleted: id });
// });
