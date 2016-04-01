import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {MENU_CLICKED, RECEIVED_PAGE, RECEIVED_MENU,
    DISPLAY_PAGE, RECEIVED_POST, CLEAR_ALL_POST,
    DISPLAY_POST, DISPLAY_POST_LIST, DISPLAY_MENU_INFO} from './actions';

const loggerMiddleware = createLogger();

const defaultState = {
    selectedMenu: '',
    menus: [],
    isFetching: false,
    posts: [],
    currentPage: {content:''},
    display: 'PAGE',
    currentPost : {},
    menuInfo:'...'
};

function blogReducer(state = defaultState, action) {
    var newState;
    switch (action.type) {
        case DISPLAY_MENU_INFO:
            newState = Object.assign({}, state, {menuInfo: action.info});
            break;
        case DISPLAY_POST:
            newState = Object.assign({}, state, {display: 'POST'});
            break;
        case DISPLAY_POST_LIST:
            newState = Object.assign({}, state, {display: 'POSTS'});
            break;
        case MENU_CLICKED:
            newState = updateForMenuClicked(Object.assign({}, state), action.menuName);
            break;
        case RECEIVED_PAGE:
            newState = Object.assign({}, state, { currentPage: action.page });
            break;
        case RECEIVED_MENU:
            newState = Object.assign({}, state, { menus: action.menus });
            break;
        case DISPLAY_PAGE:
            newState = Object.assign({}, state, { display: 'PAGE'});
            break;
        case RECEIVED_POST:
            newState = updateForNewPostReceived(Object.assign({}, state), action.post);
            break;
        case CLEAR_ALL_POST:
            newState = Object.assign({}, state, { posts: [], display: 'POSTS' });
            break;
        default:
            newState = state;
            console.log('no case found for ', action.type);
            break;
    }

    return newState;
}

function updateForNewPostReceived(newState, post) {
    newState.posts = [...newState.posts, post];
    newState.currentPage = {content:''};
    return newState;
}

function updateForMenuClicked(newState, menuName) {
    newState.selectedMenu = menuName;

    return newState;
}

var blogStore = createStore(blogReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ));


export default blogStore;