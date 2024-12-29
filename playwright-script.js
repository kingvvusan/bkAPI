const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 방문할 웹페이지 URL
  await page.goto('https://example.com');

  // 웹페이지의 제목 출력
  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
