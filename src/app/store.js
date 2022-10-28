import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quizzes/quizSlice';
import topicReducer from "../features/topics/topicSlice";
import cardReducer from "../features/cards/cardSlice";

export const store = configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardReducer,
  },
});
