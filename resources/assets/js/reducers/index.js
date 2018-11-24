import {combineReducers} from 'redux';
import {RECEIVE_BOOKS, REQUEST_BOOKS, TEST} from "../actions/index";

let initialStateBooks = {
    libBooks: {},
    isLibLoading: true,
    test: "false",
};

function Books(state = initialStateBooks, action) {
    switch(action.type) {
        case REQUEST_BOOKS:
            return Object.assign({}, state, {
                isLibLoading: true,
                test: "BOOKS REQUESTED",
            });

        case RECEIVE_BOOKS:
            return Object.assign({}, state, {
                libBooks: action.payload,
                isLibLoading: false,
                test: "BOOKS GOTTEN",
            });

        case TEST:
            alert(1);
            return Object.assign({}, state, {
                isLoading: true,
                test: "BOOKS TEST",
            });

        default:
            return state;
    }
}

const storeApp = combineReducers({Books});
export default storeApp;