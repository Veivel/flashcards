import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quizzes/quizSlice';
import topicReducer from "../features/topics/topicSlice";
import cardReducer from "../features/cards/cardSlice";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('topics', JSON.stringify(state.topics.topics));
    localStorage.setItem('cards', JSON.stringify(state.cards.cards));
    localStorage.setItem('quizzes', JSON.stringify(state.quizzes.quizzes));
  } catch (e) {
    console.error(e);
  }
};

export const store = configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardReducer,
  }
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
