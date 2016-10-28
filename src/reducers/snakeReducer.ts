import {Action} from 'redux';
import {SnakeState} from '../types/state';
import {SnakeReducer} from '../types/reducers';
import {TYPE_CRAWL} from '../actionCreators/snake';
import {getMovement, applyMovement} from "../helpers/points";

const moveSnakeForward = (snake: SnakeState): SnakeState => {
    if (snake.length < 2) {
        return snake;
    }
    const newState = snake.slice(0, -1);
    const oldHead = newState[0];
    const lastMovement = getMovement(newState[1], oldHead);
    const newHead = applyMovement(oldHead, lastMovement);
    newState.unshift(newHead);
    return newState;
};
const snakeReducer: SnakeReducer =
    (state: SnakeState = [], action: Action): SnakeState => {
        switch (action.type) {
        case TYPE_CRAWL:
            return moveSnakeForward(state);
        default:
            return state;
        }
    };
export default snakeReducer;
