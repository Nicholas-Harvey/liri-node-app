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
    page: 2,
    pageSize: '20'
    // totalResults: 20
  }).then(response => {
    console.log("----------------------------------------")
    console.log("Article One");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[0].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[0].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[0].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[0].url);
    console.log("----------------------------------------")
    console.log("Article Two");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[1].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[1].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[1].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[1].url);
    console.log("----------------------------------------")
    console.log("Article Three");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[2].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[2].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[2].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[2].url);
    console.log("----------------------------------------")
    console.log("Article Four");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[3].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[3].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[3].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[3].url);
    console.log("----------------------------------------")
    console.log("Article Five");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[4].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[14].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[4].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[4].url);
    console.log("----------------------------------------")
    console.log("Article Six");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[5].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[5].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[5].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[5].url);
    console.log("----------------------------------------")
    console.log("Article Seven");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[6].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[6].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[6].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[6].url);
    console.log("----------------------------------------")
    console.log("Article Eight");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[7].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[7].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[7].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[7].url);
    console.log("----------------------------------------")
    console.log("Article Nine");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[8].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[8].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[8].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[8].url);
    console.log("----------------------------------------")
    console.log("Article Ten");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[9].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[9].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[9].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[9].url);
    console.log("----------------------------------------")
    console.log("Article Eleven");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[10].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[10].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[10].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[10].url);
    console.log("----------------------------------------")
    console.log("Article Twelve");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[11].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[11].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[11].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[11].url);
    console.log("----------------------------------------")
    console.log("Article Thirteen");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[12].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[12].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[12].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[12].url);
    console.log("----------------------------------------")
    console.log("Article Fourteen");
    console.log("Title: " + (response).articles[13].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[13].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[13].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[13].url);
    console.log("----------------------------------------")
    console.log("Article Fifteen");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[14].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[14].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[14].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[14].url);
    console.log("----------------------------------------")
    console.log("Article Sixteen");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[15].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[15].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[15].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[15].url);
    console.log("----------------------------------------")
    console.log("Article Seventeen");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[16].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[16].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[16].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[16].url);
    console.log("----------------------------------------")
    console.log("Article Eighteen");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[17].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[17].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[17].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[17].url);
    console.log("----------------------------------------")
    console.log("Article Nineteen");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[18].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[18].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[18].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[18].url);
    console.log("----------------------------------------")
    console.log("Article Twenty");
    console.log("----------------------------------------")
    console.log("Title: " + (response).articles[19].title);
    console.log("----------------------------------------")
    console.log("Author: " + (response).articles[19].author);
    console.log("----------------------------------------")
    console.log("Date of Publication: " + (response).articles[19].publishedAt);
    console.log("----------------------------------------")
    console.log("URL to full article: " + (response).articles[19].url);
    console.log("----------------------------------------")
  });
