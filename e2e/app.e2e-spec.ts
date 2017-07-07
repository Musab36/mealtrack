import { MealtrackAppPage } from './app.po';

describe('mealtrack-app App', () => {
  let page: MealtrackAppPage;

  beforeEach(() => {
    page = new MealtrackAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
