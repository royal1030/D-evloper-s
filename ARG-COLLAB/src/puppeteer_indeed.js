// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://www.indeed.com/jobs?q=software+engineer&l=USA");

//   const jobs = await page.evaluate(() => {
//     const jobList = [];
//     const jobElements = document.querySelectorAll(
//       "#job_b366fa469fd520b4 span"
//     );

//     // for (const jobElement of jobElements) {
//     //   const title = jobElement.querySelector('.title a').innerText;
//     //   const company = jobElement.querySelector('.company').innerText;
//     //   const location = jobElement.querySelector('.location').innerText;
//     //   const salary = jobElement.querySelector('.salaryText')?.innerText || '';

//     //       jobList.push({ title, company, location, salary });
//     //     }

//     //     return jobList;
//     //   });
//     jobElements.forEach((tag3) => {
//       jobList.push(tag3.innerText);
//     });
//     return jobList;
//   });

//   console.log(jobs);

//   await browser.close();
// })();

// _______________________________________________ANISH__________________________________________________________

// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.indeed.com/jobs?q=internship&l=United+States');

//   const jobs = await page.evaluate(() => {
//     const jobNodes = document.querySelectorAll('.jobsearch-SerpJobCard');
//     const jobList = [];

//     jobNodes.forEach((node) => {
//       const title = node.querySelector('.jobtitle').textContent.trim();
//       const company = node.querySelector('.company').textContent.trim();
//       const location = node.querySelector('.location').textContent.trim();
//       const link = node.querySelector('.jobtitle').getAttribute('href');
//       const summary = node.querySelector('.summary').textContent.trim();

//       jobList.push({
//         title,
//         company,
//         location,
//         link,
//         summary,
//       });
//     });

//     return jobList;
//   });

//   fs.writeFile('indeed_jobs.json', JSON.stringify(jobs, null, 2), (err) => {
//     if (err) throw err;
//     console.log('Jobs saved to file!');
//   });

//   await browser.close();
// })();