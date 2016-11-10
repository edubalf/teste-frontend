import { TesteFrontendPage } from './app.po';

describe('teste-frontend App', function() {
  let page: TesteFrontendPage;

  beforeEach(() => {
    page = new TesteFrontendPage();
  });

  it('head is present', () => {
    page.navigateTo();
    expect(page.headLogo.isPresent()).toBeTruthy();
  });

  it('list series render', () => {
    page.navigateTo();
    expect(page.serieCards.count()).toBe(12);
  });

  it('button load more series present', () => {
    page.navigateTo();
    expect(page.loadMoreSeriesButton.isPresent()).toBeTruthy();
  });

  it('load more series', () => {
    page.navigateTo();
    page.buttonLoadMoreSeriesClick();
    expect(page.serieCards.count()).toBe(24);
  });

  it('serie detail render', () => {
    page.navigateTo();
    page.serieCards.first().click();
    expect(page.detailContent.isPresent()).toBeTruthy();
  });
});
