import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
import loadItem from "../../app/store-loader"

const initialState = {
    topics: loadItem('topics')
};

const topicSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        // addTopic(topic args...) will prepare the action AND reduce to new state.
        addTopic: {
            reducer: (state, action) => {
                state.topics = {...state.topics, [action.payload.id]: action.payload}
            },
            prepare: (id, topicName, topicIcon, quizIdsArray) => ({
                payload: {id: id, name: topicName, icon: topicIcon, quizIds: quizIdsArray}
            })
        },
    }
});

export const selectTopics = state => {
    // return state ? state.topics.topics : undefined;
    return state.topics.topics;
}

export const { addQuizToTopic, addTopic } = topicSlice.actions;
export default topicSlice.reducer;