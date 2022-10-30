import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
import loadItem from '../../app/store-loader';

const initialState = {
    cards: loadItem('cards')
}

const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: {
            reducer: (state, action) => {
                state.cards = {...state.cards, [action.payload.id]: action.payload}
            },
            prepare: (cardId, front, back) => ({
                payload: {id: cardId, front: front, back: back}
            })
        }
    }
});

export const selectCards = (state) => {
    return state.cards.cards;
}

export default cardSlice.reducer;
export const { addCard } = cardSlice.actions;