// const puppeteer = require("puppeteer");
// // import { addUser1, addUser2, addUser3 } from "./service/api";
// // import React from "react";
// // const addUser1 = require("./service/api");
// // const addUser2 = require("./service/api");
// // const addUser3 = require("./service/api");

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("http://www.iiitt.ac.in/");

//   // Extract the data
//   const data1 = await page.evaluate(() => {
//     const elements1 = document.querySelectorAll("#events a p");
//     const technologies1 = [];
//     elements1.forEach((tag1) => {
//       technologies1.push(tag1.innerText);
//     });
//     return technologies1;
//   });
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
//   //  const data3 = await page.evaluate(() => {
//   //     const elements3 = document.querySelectorAll('#news-card a');
//   //     const technologies3 = [];
//   //     elements3.forEach((tag3) => {
//   //       const href = tag3.getAttribute("href");
//   //       technologies3.push(href);
//   //     })
//   //     return technologies3;
//   //   });

//   // const addData1 = async (user) => {
//   //   addUser1(user);
//   // };

//   // const addData2 = async (user) => {
//   //   addUser2(user);
//   // };

//   // const addData3 = async (user) => {d
//   //   addUser3(user);
//   // };

//   console.log(data1);
//   console.log(data2);
//   console.log(data3);

//   // addData1(data1);
//   // addData2(data2);
//   // addData3(data3);

//   await browser.close();
// })();


// ________________________________________________________________________________________________________________

// for college website
const puppeteer = require("puppeteer");

const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://www.iiitt.ac.in/");

  // Extract the data
  const data1 = await page.evaluate(() => {
    const elements1 = document.querySelectorAll("#events a p");
    const technologies1 = [];
    elements1.forEach((tag1) => {
      technologies1.push(tag1.innerText);
    });
    return technologies1;
  });
  const data2 = await page.evaluate(() => {
    const elements2 = document.querySelectorAll("#news a p");
    const technologies2 = [];
    elements2.forEach((tag2) => {
      technologies2.push(tag2.innerText);
    });
    return technologies2;
  });
  const data3 = await page.evaluate(() => {
    const elements3 = document.querySelectorAll("#notices a p");
    const technologies3 = [];
    elements3.forEach((tag3) => {
      technologies3.push(tag3.innerText);
    });
    return technologies3;
  });

  const arr = [data1, data2, data3];
// Your Puppeteer code to scrape the data
const scrapedData = {
  // your scraped data object
  data1,
  data2,
  data3
};

// fs.writeFile('./databases/scraped-data.json', JSON.stringify(scrapedData), err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Scraped data has been written to scraped-data.json');
// });

const path = require('path');
const fileName = 'academicsData.json';
const dataDir = "database"

const filePath = path.join(__dirname, dataDir, fileName);
fs.writeFile(filePath, JSON.stringify(scrapedData), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Scraped data has been written to ${filePath}`);
});
//   console.log(data1);
//   console.log(data2);
//   console.log(data3);

  await browser.close();
})();
