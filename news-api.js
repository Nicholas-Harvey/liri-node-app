// Data Needed: 
// Author
// Published Date
// URL to full article

require('dotenv').config();
const NewsAPI = require('newsapi');
const keys = require ('./keys.js')
// console.log(keys);
const newsapi = new NewsAPI(keys.newsapi.apikey);
var headline = process.argv[2];
newsapi.v2.everything({
    q: headline,
    sources: 'bbc-news,the-verge,new-york-times',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
    // pageSize: '20'
    // totalResults: 20
  }).then(response => {
    // console.log(response);
    console.log("Title: " + (response).articles[0].title);
    console.log("Author: " + (response).articles[0].author);
    console.log("Date of Publication: " + (response).articles[0].publishedAt);
    console.log("URL to full article: " + (response).articles[0].url);
  });
