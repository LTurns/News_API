

window.onload = function(){
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2020-06-02')
    .then(function(response){
       return response.json()})
       // this was the first step I did. Here  we simply fetch the API and check that it is returning something by looking into the
       // Network tab, clicking on the apiRequestUrl, looking at the response, and finding that the json is there and available to us.
     .then(function(data){
       let div = document.getElementById('headlines')
       // document refers to the html doc. The variable we have made references and grabs the element in our html file with the id "headlines".
       for (let index = 0; index < data.response.results.length; index++) {
         // data.response.results calls the response of the json, which we have put in an object called data.
         // Using a for loop, we can iterate over every aspect of the data and make a new instance out of it. That way, we
         // have flexibility in the different ways we can call it.
         const article = new Article(data.response.results[index]);
         // Here, we create a new object from the Article class. We pass the json data as a parameter through this object.
         // // We then complete the (article.toNode) method (i.e. making a div, grabbing the title and url etc from the data and making it return within
         // html elements..) and we append the result in the div we created in this function. This is a nice, very smooth way of getting an API, and tailoring
         // it in your html document.
        div.appendChild(article.toNode())
      }
    });
// A good way of getting the json and manipulating it in the way you want, is through making a class.

class Article {
  constructor(data){
    this.title = data.webTitle
    this.url = data.webUrl
  }

  toNode(){
    // In this method, we decide how we would like to show the data (with innerHTML).
    var node = document.createElement('div')
    // we have called the div node = node will encompass a lot of other elements, which we can apend to it.
    // Lightbulb moment =   node.appendChild(title) = append child is used because title is the child of a div - div is a parent,
    // because the title lives in the div and can append elements inside it.
    var title = document.createElement('h3')
    var url = document.createElement('a')
    // Here, we have created the div, title and url element. Now we actually need to add some text to it = specifically, we
    // need to add the data from the json that we want.To do this, we incorporate innerHTML.

    title.innerText = this.title
    url.innerText = 'See the Article'
    // means we are making "see the article" the name of the link
    url.setAttribute('href', this.url)
    // this synax grabs this.url from the data and sets the attribute of href. Similarly to normal html, href is the attribute of the 'a' (anchor) tag.
    node.appendChild(title)
    node.appendChild(url)

    // this means that both the title and the url will now be put within the div.
  // difference between innerText and innerHTML:
  // InnerText retrieves and sets the content of the tag as plain text,
  // whereas innerHTML retrieves and sets the same content but in HTML format
   return node
    }
 }
}

// TIP: IF THE SERVER IS NOT REFRESHING, DO A HARD REFRESH ==== CMD, SHIFT, R. DOING THIS STOPPED ME FROM HAVING THE SAME ERROR!
// To ensure the whole thing works (as everything is connected together), wrap it all around window.onload == this means everything will flow
// correctly when the page loads.
