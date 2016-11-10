import { browser, element, by } from 'protractor';

export class TesteFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  headLogo = element(by.css('.brand-logo'));

  serieCards = element.all(by.css('.col a[href]'));

  loadMoreSeriesButton = element(by.css('.btn'));

  detailContent = element(by.css('app-serie-detail-content'));

  buttonLoadMoreSeriesClick() {
    element(by.css('.btn')).click();
  }
}
