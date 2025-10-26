import { GET_DETAIL, GET_LIST, SET_DETAIL, SET_LIST } from "./constants";

const initState = {
    list: [],
    detail: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        // List
        case GET_LIST:
            return {
                ...state,
            };
        case SET_LIST:
            return {
                ...state,
                list: action.payload,
            };
        // Detail
        case SET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        case GET_DETAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;
