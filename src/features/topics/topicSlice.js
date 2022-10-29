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

        // delete quiz from topic's quizIds array
        deleteQuizFromTopic: {
            reducer: (state, action) => {
                const oldTopic = state.topics[action.payload.topicId];
                const editedTopic = {
                    ...oldTopic, 
                    quizIds: oldTopic.quizIds.filter(
                        (id) => (id !== action.payload.quizId)
                        )
                    }
                state.topics = {...state.topics, [action.payload.topicId]: editedTopic}
            },
            prepare: (topicId, quizId) => ({
                payload: {topicId: topicId, quizId: quizId}
            })
        }

    }
});

export const selectTopics = state => {
    // return state ? state.topics.topics : undefined;
    return state.topics.topics;
}

export const { addTopic, deleteQuizFromTopic } = topicSlice.actions;
export default topicSlice.reducer;