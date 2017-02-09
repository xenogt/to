import { TaskorderPage } from './app.po';

describe('taskorder App', function() {
  let page: TaskorderPage;

  beforeEach(() => {
    page = new TaskorderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
