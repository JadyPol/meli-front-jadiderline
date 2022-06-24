import puppeteer from 'puppeteer';

import { App } from './config/app.config';
import {
  InputSearchId, InputSelector, BtnSelector, SearchBarContainerSelector, BreadcrumbsItemSelector,
  ProductCardComponentSelector, RandomIntFromInterval, ProductDetailContainerSelector, PayBtnSelector
} from './config/selector.config';

describe('Search With Results', () => {

  const Search = 'Nintendo Switch Oled';

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto(App);
  });

  it(`Search By Query ${Search}`, async () => {
    await page.waitForSelector(SearchBarContainerSelector);
    const input = await page.$(InputSelector);
    await input.evaluate(_input => _input.click());
    await page.type(InputSelector, Search);
    const button = await page.$(BtnSelector);
    await button.evaluate(_button => _button.click());
    await page.waitForSelector(ProductCardComponentSelector);
    expect((await page.$$(ProductCardComponentSelector)).length).toEqual(4);
  });

  it('Click Random Card Item in Query Search', async () => {
    const results = await page.$$(ProductCardComponentSelector);
    const random = RandomIntFromInterval(0, results.length - 1);
    await results[random].click();
    await page.waitForSelector(ProductDetailContainerSelector);
    expect((await page.$$(ProductDetailContainerSelector)).length).toEqual(1);
  });

  it('Breadcrumbs Category Click in Detail', async () => {
    const breadcrumbs = await page.$$(BreadcrumbsItemSelector);
    const random = RandomIntFromInterval(0, breadcrumbs.length - 1);
    await breadcrumbs[random].click();
    await page.waitForSelector(ProductCardComponentSelector);
    expect((await page.$$(ProductCardComponentSelector)).length).toEqual(4);
  });

  it('Click Random Card Item in Category Search', async () => {
    const results = await page.$$(ProductCardComponentSelector);
    const random = RandomIntFromInterval(0, results.length - 1);
    await results[random].click();
    await page.waitForSelector(ProductDetailContainerSelector);
    expect((await page.$$(ProductDetailContainerSelector)).length).toEqual(1);
  });

  it('Click Pay Btn In Detail', async () => {
    await page.waitForSelector(PayBtnSelector);
    await page.click(PayBtnSelector);
    expect((await page.$$(PayBtnSelector)).length).toEqual(1);
  });

  afterAll(() => browser.close());
});
