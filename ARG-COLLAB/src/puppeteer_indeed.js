const puppeteer = require("puppeteer");

// const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://in.indeed.com/jobs?q=internship&l=Work+from+Home&from=searchOnHP&vjk=3e9ab0fd3fc17f63");

  // Extract the data
  const data1 = await page.evaluate(() => {
    const elements1 = document.querySelectorAll(".jcs-JobTitle.css-jspxzf.eu4oa1w0 a span");
    const technologies1 = [];
    elements1.forEach((tag1) => {
      technologies1.push(tag1.innerHTML);
    });
    return technologies1;
  });
//   const data2 = await page.evaluate(() => {
//     const elements2 = document.querySelectorAll("#news a p");
//     const technologies2 = [];
//     elements2.forEach((tag2) => {
//       technologies2.push(tag2.innerText);
//     });
//     return technologies2;
//   });
//   const data3 = await page.evaluate(() => {
//     const elements3 = document.querySelectorAll("#notices a p");
//     const technologies3 = [];
//     elements3.forEach((tag3) => {
//       technologies3.push(tag3.innerText);
//     });
//     return technologies3;
//   });

//   const arr = [data1, data2, data3];f
// Your Puppeteer code to scrape the data
// const scrapedData = {
//   // your scraped data object
//   data1,
//   data2,
//   data3
// };

// fs.writeFile('scraped-data.json', JSON.stringify(scrapedData), err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Scraped data has been written to scraped-data.json');
// });
  console.log(data1);
//   console.log(data2);
//   console.log(data3);

  await browser.close();
})();