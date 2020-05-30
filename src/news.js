class News {

   constructor(){
     this.news = []
   }

   add(news){
     this.news.push(news);
     // will call the api and add it here to this method
   }

  viewAll(){
    let html = "";
    var i;
    for (i = 0; i < this.news.length; i++) {
    html += '<div class="shortNote"><h3 id="' + i + '" onclick="update(' + i + ')">' + this.news[i].substring(0, 20) + '...</h3></div>';
    // return `<div class="NewsList"><h3 id="${i}" onclick="update('${i}')">' + this.news[i].substring(0, 20) + '...</h3></div>`;
    return html;
     }
  }

  viewOne(news){
    let html = "";
    html = `<div class="mainNote"><h3>${this.news[news]}</h3></div>`
    return html;
  }
}
