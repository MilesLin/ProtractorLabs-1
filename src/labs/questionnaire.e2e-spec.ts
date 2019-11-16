import { browser, element, by } from 'protractor';

describe('the user submit a questionnaire', () => {
  it('should type information', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('labs/questionnaire');
    await element(by.name('username')).sendKeys('John');
    await element(by.name('codeLanguage')).sendKeys('javascript');
    await element(by.buttonText('送出')).click();
    const formText = await element(by.tagName('form')).getText();
    await browser.waitForAngularEnabled(true);
    expect(formText).toContain('送出成功');
  });
});
