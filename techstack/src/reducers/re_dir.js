/**
 * Created by tyhink on 7/2/17.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});