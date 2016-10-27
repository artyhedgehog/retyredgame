import {ScoreReducer} from '../types/reducers';
import {Action} from 'redux';
import {ScoreState} from '../types/state';

const scoreReducer: ScoreReducer =
    (state: ScoreState = 0, action: Action): ScoreState => {
        switch (action.type) {
        default:
            return state;
        }
    };
export default scoreReducer;
