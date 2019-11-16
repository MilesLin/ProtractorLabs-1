import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('the user try to search on vuejs', () => {
  beforeEach( async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://vuejs.org/');
  });
  
  it('should type search keyword', async () => {
    await element(by.id('search-query-nav')).sendKeys('ssr');
    await browser.sleep(3000);
    const txt = await element(by.className('aa-dataset-1')).getText();
    console.log(txt);
    expect(txt).toContain('The Complete SSR Guide');
  });

});
