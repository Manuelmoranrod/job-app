const puppeteer = require('puppeteer');

const scraper = async (url) => {
    try {
 
        const scraperData = []
       
        console.log("Opening the browser......");
       
        const browser = await puppeteer.launch({ headless: false})


        const page = await browser.newPage()
       
   
        await page.goto(url)
        console.log(`Navigating to ${url}...`);
  
        await page.type('#q', 'javascript');
       
        await page.click('#frmcategHome > div > button');

        await page.waitForTimeout(2000);

        const urls = await page.$$eval('div.course-box-item.title-box > h3 > a', (links) => links.map(link=> link.href))
        console.log('urls capturada', urls.length, urls);

  
    } catch (err) {
        console.log("Error:", err);
    }
}

scraper('http://www.emagister.com')