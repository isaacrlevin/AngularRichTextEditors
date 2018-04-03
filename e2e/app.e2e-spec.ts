import { RichTextPage } from './app.po';

describe('rich-text App', function() {
  let page: RichTextPage;

  beforeEach(() => {
    page = new RichTextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
