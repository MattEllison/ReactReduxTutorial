import { ADD_ARTICLE } from '../constants/action-types';
const initalState = {
    articles: []
}

const rootReducer = (state = initalState, action) => {

    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
            return state;
        default:
            return state;
    }
}

export default rootReducer;