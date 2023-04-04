const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://www.iiitt.ac.in/');

  // Extract the data
  const data1 = await page.evaluate(() => {
    const elements1 = document.querySelectorAll('#events a p');
    const technologies1 = [];
    elements1.forEach((tag1) => {
      technologies1.push(tag1.innerText);
    })
    return technologies1;
  });
  const data2 = await page.evaluate(() => {
    const elements2 = document.querySelectorAll('#news a p');
    const technologies2 = [];
    elements2.forEach((tag2) => {
      technologies2.push(tag2.innerText);
    })
    return technologies2;
  });
  const data3 = await page.evaluate(() => {
    const elements3 = document.querySelectorAll('#notices a p');
    const technologies3 = [];
    elements3.forEach((tag3) => {
      technologies3.push(tag3.innerText);
    })
    return technologies3;
  });
//  const data3 = await page.evaluate(() => {
//     const elements3 = document.querySelectorAll('#news-card a');
//     const technologies3 = [];
//     elements3.forEach((tag3) => {
//       const href = tag3.getAttribute("href");
//       technologies3.push(href);
//     })
//     return technologies3;
//   });

  console.log(data1);
  console.log(data2);
  console.log(data3);
  await browser.close();
})();


