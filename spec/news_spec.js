let Class = News;

describe('News', function(){

  describe('.viewAll', function(){
    it('shows a list of articles for the daily news', function(){
      subject.add("News of the Day");
      expect(subject.viewAll()).toInclude('News of the Day');
     });
  });

  describe ('.viewOne', function(){
    it('shows one of the articles from the news', function(){
      subject.add("this is the news today");
      subject.add('this is a second piece of news today');
      expect(subject.viewOne(1)).toInclude("this is a second piece of news today");
    });
 });

});
