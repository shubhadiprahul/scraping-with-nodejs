# scraping-with-nodejs
I'm scraped latest stories from the website 
`htttp://time.com/` 

I'm scraped with `request` and `cheerio` and I'm also use `express` for creating server .

## Request 
Request is used to describe an request to a server. Use with fetch() to perform the request and get a Response. Request, fetch(), and Response are a new, low level replacement for XMLHttpRequest.

`const request = require("request");
`

## cheerio
Cheerio js is a Javascript technology used for web-scraping in server-side implementations. Web-scraping is a scripted method of extracting data from a website that can be tailored to your use-case. NodeJS is often used as the server-side platform.

`const cheerio = require('cheerio');
`

`const $ = cheerio.load(body)
`

## Package Installation
     $ npm install <package_name>

