import {ActionCreator} from 'redux';

import {GameStatus} from '../types/state';
import {GameSetStatusAction} from '../types/actions';


export const TYPE_SET_STATUS = 'setStatus';

export const setStatus: ActionCreator<GameSetStatusAction> =
    (status: GameStatus): GameSetStatusAction => ({
        type: TYPE_SET_STATUS,
        status,
    });
