const puppeteer = require('puppeteer');

//Creamos una función para extraer la información de cada curso y envolvemos en una promesa
const extractCourseData = (link, browser) => new Promise (async (resolve, reject) => {

    try{
        
        const courseData = {}

        const page = await browser.newPage()

        await page.goto(link)
    
        await page.waitForTimeout(500);

            
            courseData['courseTitle'] = await page.$eval('h1', title => title.innerText);
            courseData['courseDescription'] = await page.$eval('div.course.container.m-t-30 > div:nth-child(2) > div > div > div:nth-child(2) > div > div', description => description.innerText)
            courseData['coursePrice'] = await page.$eval('body > main > div.course.container.m-t-30 > div:nth-child(1) > div.course__price.colf-md-4.colf-sm-12 > div > div.course__cta.ta--c.p-a-15.p-b-0 > div.o-tooltip.m-t-10 > div', price => price.innerText);
            courseData['courseImage'] = await page.$eval('body > main > div.course.container.m-t-30 > div:nth-child(1) > div.course__info.colf-md-8.colf-sm-12 > img', image => image.src);
            //courseData['courseDates'] = await page.$eval('.course-venues__date-item:nth-child(n)', dates => dates.innerText)
            courseData['courseLocation'] = await page.$eval('body > main > div.course.container.m-t-30 > div:nth-child(1) > div.course__info.colf-md-8.colf-sm-12 > ul > li:nth-child(3) > span', location => location.innerText)
            courseData['courseAcademy'] = await page.$eval('body > main > div.course.container.m-t-30 > div:nth-child(1) > div.course__info.colf-md-8.colf-sm-12 > p > a', academy => academy.innerText)
            
            console.log(courseData);

            resolve(courseData)
    }
    catch(err){
        console.log(err);
    }
})

const scraper = async (url) => {
    try {

        const scraperData = []

        console.log("Opening the browser......");

        const browser = await puppeteer.launch({ headless: false})

        const page = await browser.newPage()

        await page.goto(url)
        console.log(`Navigating to ${url}...`);

        await page.waitForTimeout(4000); // Esperamos para aceptar las cookies

        await page.click('#onetrust-accept-btn-handler');

        await page.type('#pal', 'javascript');

        await page.waitForTimeout(2000);

        await page.click('#homepageSearchButton');

        await page.waitForTimeout(1000);

        const urls = await page.$$eval('div > header > h3 > a', (links) => links.map(link=> link.href))
        console.log('urls capturada', urls.length, urls);

        
        for(courseLink in urls){
            const course = await extractCourseData(urls[courseLink], browser)
            scraperData.push(course)
        }
        console.log(scraperData, "Lo que devuelve mi función scraper", scraperData.length)


    } catch (err) {
        console.log("Error:", err);
    }
}

scraper('http://www.educaweb.com')