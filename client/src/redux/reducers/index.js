import { combineReducers } from 'redux';
import localeReducer from './locale';
import themeReducer from './theme';
import modalItemsReducer from './modalItems';
import authReducer from './auth';
import carouselReducer from './carousels';
import mangaReducer from './mangaApi/manga';
import mangaCatalogReducer from './mangaApi/mangaCatalog';
import mangaSearchReducer from './mangaApi/mangaSearch';
import coverReducer from './mangaApi/cover';
import chapterReducer from './mangaApi/chapter';
import chaptersReducer from './mangaApi/chapters';
import chapterPagesReducer from './mangaApi/chapterPages';
import nextChapterIdReducer from './mangaApi/nextChapterId';
import firstChapterIdReducer from './mangaApi/firstChapterId';
import tagsReducer from './mangaApi/tags';

const rootReducer = combineReducers({
  locales: localeReducer,
  themes: themeReducer,
  modalItems: modalItemsReducer,
  auth: authReducer,
  carousels: carouselReducer,
  manga: mangaReducer,
  mangaCatalog: mangaCatalogReducer,
  mangaSearch: mangaSearchReducer,
  cover: coverReducer,
  chapter: chapterReducer,
  chapters: chaptersReducer,
  chapterPages: chapterPagesReducer,
  nextChapterId: nextChapterIdReducer,
  firstChapterId: firstChapterIdReducer,
  tags: tagsReducer,
});

export default rootReducer;
