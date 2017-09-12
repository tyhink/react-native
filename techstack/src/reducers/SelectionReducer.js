/**
 * Created by tyhink on 7/14/17.
 */

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};