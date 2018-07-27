const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a30ad9d2ef7f49268b6c43267c62a1ca');
var headline = process.argv[2];
newsapi.v2.everything({
    q: headline,
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    // console.log(response);
    console.log(response[0].articles);
    // console.log("Date that the article was published" + response);
    // console.log("Url to article: " + response);
  });
