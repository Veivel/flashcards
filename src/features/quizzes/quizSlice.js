import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const initialState = {
    quizzes: {}
}

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        // adding new quiz from name
        newQuiz: {
            reducer: (state, action) => {
                state.quizzes = {...state.quizzes, [action.payload.id]: action.payload}
            },
            prepare: (quizId, quizName, topicId, cardIdsArray) => ({
                payload: {id: quizId, topicId: topicId, name: quizName, cardIds: cardIdsArray}
            })
        }
    }
});

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes;
}

export const { newQuiz } = quizSlice.actions;
export default quizSlice.reducer;