import {Middleware, Store, Action, Dispatch} from 'redux';
import {AppState, SnakeState, GameStatus} from '../types/state';
import {isInBoundaries} from '../helpers/points';
import {setStatus, TYPE_SET_STATUS} from '../actionCreators/game';

function isBoundaryReached(state: AppState): boolean {
    const snake: SnakeState = state.snake;
    if (snake.length < 1) {
        return false;
    }
    const head = snake[0];

    const {rows, columns} = state.board;
    const boundaries = {
        minX: 0,
        maxX: columns - 1,
        minY: 0,
        maxY: rows - 1
    };

    return !isInBoundaries(head, boundaries);
}

export const boundariesWatcher: Middleware =
    (store: Store<AppState>) => (next: Dispatch<AppState>) => (action: Action) => {
        next(action);
        if (action.type !== TYPE_SET_STATUS && isBoundaryReached(store.getState())) {
            store.dispatch(setStatus(GameStatus.Over));
        }
    };
