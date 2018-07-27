require('dotenv').config();
const NewsAPI = require('newsapi');
const keys = require ('./keys.js')
console.log(keys);
const newsapi = new NewsAPI(keys.newsapi.apikey);
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
    console.log(response);
  });
