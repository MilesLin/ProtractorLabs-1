import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

fdescribe('the user try to login', () => {
  beforeEach( async () => {
    await browser.get('/');
  });
  
  it('should login to event page', async () => {
    await element(by.linkText('登入')).click();
    await element(by.id('userName')).sendKeys('John');
    await element(by.id('password')).sendKeys('123456');
    await element(by.buttonText('登入')).click();
    expect(await browser.getCurrentUrl()).toBe(browser.baseUrl + 'events');
  });

});
