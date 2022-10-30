import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
import loadItem from "../../app/store-loader"

const initialState = {
    quizzes: loadItem('quizzes')
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
        },

        // delete quiz by id
        // filtering source: https://stackabuse.com/how-to-filter-an-object-by-key-in-javascript/
        deleteQuiz: {
            reducer: (state, action) => {
                state.quizzes = Object.keys(state.quizzes)
                    .filter(key => key !== action.payload.id)
                    .reduce((obj, key) => {
                        obj[key] = state.quizzes[key];
                        return obj;
                }, {});
            },
            prepare: (quizId) => ({
                payload: {id: quizId}
            })
        },

        // insert cardId to quiz's cardIds array
        insertCardToQuiz: {
            reducer: (state, action) => {
                // dont murder me for this mess ok, it works and thats all that matters
                state.quizzes = {
                    ...state.quizzes, [action.payload.quizId]: {
                        ...state.quizzes[action.payload.quizId], cardIds: 
                            [...state.quizzes[action.payload.quizId].cardIds, action.payload.cardId]
                    }
                }
            },
            prepare: (cardId, quizId) => ({
                payload: {cardId: cardId, quizId: quizId}
            })
        },
    }
});

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes;
}

export const { newQuiz, deleteQuiz, insertCardToQuiz } = quizSlice.actions;
export default quizSlice.reducer;