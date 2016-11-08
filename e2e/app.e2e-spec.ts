import { TesteFrontendPage } from './app.po';

describe('teste-frontend App', function() {
  let page: TesteFrontendPage;

  beforeEach(() => {
    page = new TesteFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
