import { COMMENT_LIST_ERROR, COMMENT_LIST_RECEIVED, COMMENT_LIST_REQUEST, COMMENT_LIST_UNLOAD } from "../actions/constant";

export default (state = {
    comments: null,
    isFetching: false
}, action) => {

    switch (action.type) {
        case COMMENT_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case COMMENT_LIST_RECEIVED:
            return {
                ...state,
                comments: action.data['hydra:member'],
                isFetching: false
            };
        case COMMENT_LIST_ERROR:
        case COMMENT_LIST_UNLOAD:
            return {
                ...state,
                isFetching: false,
                comments: null
            };
        default:
            return state;
    }

}