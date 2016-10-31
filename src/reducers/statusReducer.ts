import {Reducer, Action} from 'redux';

import {GameStatus} from '../types/state';
import {TYPE_SET_STATUS} from '../actionCreators/game';
import {GameSetStatusAction} from '../types/actions';


const statusReducer: Reducer<GameStatus> =
    (status: GameStatus = GameStatus.Ready, action: Action): GameStatus => {
        switch (action.type) {
            case TYPE_SET_STATUS: return (<GameSetStatusAction>action).status;
            default: return status;
        }
    };
export default statusReducer;
