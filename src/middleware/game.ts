import {Middleware, Store, Dispatch, Action} from 'redux';
import {AppState, GameStatus} from '../types/state';
import {TYPE_SET_STATUS, setStatus} from '../actionCreators/game';

const gameIsRunning =
    ({status}: AppState): boolean => status === GameStatus.Running;

export const gameStatusWatcher: Middleware =
    (store: Store<AppState>) => (next: Dispatch<AppState>) => (action: Action) => {
        const state = store.getState();
        console.log(state, action);
        if (action.type === TYPE_SET_STATUS || gameIsRunning(state)) {
            next(action);
        } else if (state.status === GameStatus.Over) {
            if (confirm('The game is over. Restart?')) {
                store.dispatch(setStatus(GameStatus.Running))
            }
        } else {
            if (confirm('Start the game?')) {
                store.dispatch(setStatus(GameStatus.Running))
            }
        }
        console.log(state);
    };
