import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

fdescribe('the user try to login', () => {
  beforeEach(() => {
    browser.get('/');
  });
  
  it('should login to event page', () => {
    element(by.linkText('登入')).click();
    element(by.id('userName')).sendKeys('John');
    element(by.id('password')).sendKeys('123456');
    element(by.buttonText('登入')).click();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'events');
  });

});
