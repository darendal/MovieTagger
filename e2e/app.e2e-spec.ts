import { MovieTaggerPage } from './app.po';

describe('movie-tagger App', () => {
  let page: MovieTaggerPage;

  beforeEach(() => {
    page = new MovieTaggerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
