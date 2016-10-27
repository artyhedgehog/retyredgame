import {combineReducers, Reducer} from 'redux';
import snake from './snakeReducer';
import food from './foodReducer';
import score from './scoreReducer';
import {AppStateReducersMap, AppState} from '../types/state';

const reducers: AppStateReducersMap = {snake, food, score};
const appReducer: Reducer<AppState> = combineReducers<AppState>(reducers);
export default appReducer;
