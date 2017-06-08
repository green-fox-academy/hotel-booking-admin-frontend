import { AdminFrontendPage } from './app.po';

describe('admin-frontend App', () => {
  let page: AdminFrontendPage;

  beforeEach(() => {
    page = new AdminFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
