import { MissingPeoplePage } from './app.po';

describe('missing-people App', () => {
  let page: MissingPeoplePage;

  beforeEach(() => {
    page = new MissingPeoplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
