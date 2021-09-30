const request = require("request");
const cheerio = require('cheerio');
const links = [] , titles = []
const data = []
const url = "https://time.com";

request(url, (err, res, body) => {
    if (err) console.log(err)
    else {
        const $ = cheerio.load(body)

        let title = $('section[class="homepage-module latest"] a').each((index, value) => {
            var title = $(value).text();
            titles.push({ "title": title });
        });

        let link = $('section[class="homepage-module latest"] a').each((index, value) => {
            var link = $(value).attr('href');
            links.push({ "link": url + link });
        });
  
        for (let i = 0; i < titles.length; i++) {
            const dict = {}
            dict.title = titles[i]['title']
            dict.link = links[i]['link']
            data.push(dict)
        }    
        console.log(data);
    }
})

module.exports = data;