import puppeteer from 'puppeteer';

import { App } from './config/app.config';
import {
  InputSelector, BtnSelector, NoResultSelector, SearchBarContainerSelector
} from './config/selector.config';

describe('Search Without Results', () => {

  const SearchNoResult = 'KADADADGDMKGDJG';

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto(App);
  });

  it(`Search By Query ${SearchNoResult}`, async () => {
    await page.waitForSelector(SearchBarContainerSelector);
    const input = await page.$(InputSelector);
    await input.evaluate(_input => _input.click());
    await page.type(InputSelector, SearchNoResult);
    const button = await page.$(BtnSelector);
    await button.evaluate(_button => _button.click());
    await page.waitForSelector(NoResultSelector);
    expect((await page.$$(NoResultSelector)).length).toEqual(1);
  });

  afterAll(() => browser.close());
});
