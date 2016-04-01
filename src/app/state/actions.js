import BlogApi from '../api/blogApi';

export const MENU_CLICKED = 'MENU_CLICKED';

export function menuClicked(menuName) {
    return {
        type: MENU_CLICKED,
        menuName
    };
}

export const RECEIVED_PAGE = 'RECEIVED_PAGE';

export function receivePage(page) {
    return {
        type: RECEIVED_PAGE,
        page
    }
}

export const FETCHING_PAGE = 'FETCHING_PAGE';

export function fetchingPage(pageName) {
    return {
        type: FETCHING_PAGE,
        pageName
    }
}

export const RECEIVED_MENU = 'RECEIVED_MENU';

export function receivedMenu(menus) {
    return {
        type: RECEIVED_MENU,
        menus
    }
}

export const RECEIVED_POST = 'RECEIVED_POST';

export function receivedPost(post) {
    return {
        type: RECEIVED_POST,
        post
    }
}

export const CLEAR_ALL_POST = 'CLEAR_ALL_POST';

export function clearAllPost() {
    return {
        type: CLEAR_ALL_POST,

    }
}

export const DISPLAY_POST_LIST = 'DISPLAY_POST_LIST';

export function displayPostList() {
    return {
        type: DISPLAY_POST_LIST
    }
}

export const DISPLAY_POST = 'DISPLAY_POST';

export function displayPost(post) {
    return {
        type: DISPLAY_POST,
        post
    }
}

export const DISPLAY_PAGE = 'DISPLAY_PAGE';

export function displayPage(post) {
    return {
        type: DISPLAY_PAGE,
        post
    }
}

export const DISPLAY_MENU_INFO = 'DISPLAY_MENU_INFO';

export function displayMenuInfo(info) {
    return {
        type: DISPLAY_MENU_INFO,
        info
    }
}

export function fetchPageAsync(pageName) {
    return function(dispatch) {
        dispatch(clearAllPost());
        dispatch(displayPage(pageName));
        dispatch(displayMenuInfo('... Loading Page ...'));
        return BlogApi.getPage(pageName, function(data) {
            dispatch(receivePage(data));
            dispatch(displayMenuInfo(data.title));
        });
    };
}

export function fetchMenusAsync() {
    return function(dispatch) {
        dispatch(displayMenuInfo('... Loading Menus ...'));
        return BlogApi.getMenus(function(data) {
            dispatch(receivedMenu(data));
            dispatch(displayMenuInfo(''));
        });
    };
}

export function fetchLatestPostAsync() {
    return function(dispatch) {
        dispatch(clearAllPost());
        dispatch(displayPostList());
        dispatch(displayMenuInfo('... Loading All Latest Posts ...'));
        return BlogApi.getAllPosts(function(data) {
            dispatch(receivedPost(data));
            dispatch(displayMenuInfo('All Posts Displayed'));
        });
    };
}

export function fetchPostAsync(postUrl) {
    return function(dispatch) {
        dispatch(clearAllPost());
        dispatch(displayPost());
        dispatch(displayMenuInfo('... Loading post ...'));
        return BlogApi.getPost(postUrl, function(data) {
            dispatch(receivedPost(data));
            dispatch(displayMenuInfo(data.title));
        });
    };
}