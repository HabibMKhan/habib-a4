import { HabibA4Page } from './app.po';

describe('habib-a4 App', () => {
  let page: HabibA4Page;

  beforeEach(() => {
    page = new HabibA4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
