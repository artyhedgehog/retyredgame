import {Action} from 'redux';

import {ScoreReducer} from '../types/reducers';
import {ScoreState} from '../types/state';
import {TYPE_INCREMENT} from '../actionCreators/score';


const scoreReducer: ScoreReducer =
    (state: ScoreState = 0, action: Action): ScoreState => {
        switch (action.type) {
            case TYPE_INCREMENT: return state + 1;
            default: return state;
        }
    };
export default scoreReducer;
