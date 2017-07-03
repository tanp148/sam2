import { Ss2Page } from './app.po';

describe('ss2 App', () => {
  let page: Ss2Page;

  beforeEach(() => {
    page = new Ss2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
