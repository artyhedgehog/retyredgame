import {Action} from 'redux';

import {SnakeState} from '../types/state';
import {SnakeReducer} from '../types/reducers';
import {TYPE_CRAWL, TYPE_TURN} from '../actionCreators/snake';
import {
    getMovementBetween,
    applyMovement,
    getMovementForDirection
} from '../helpers/points';
import {SnakeTurnAction} from '../types/actions';
import {Movement} from "../types/models";


function moveSnake(snake: SnakeState, movement: Movement): SnakeState {
    const newState = snake.slice(0, -1);
    const oldHead = newState[0];
    const newHead = applyMovement(oldHead, movement);
    newState.unshift(newHead);
    return newState;
}
function moveSnakeForward(snake: SnakeState): SnakeState {
    if (snake.length < 2) {
        return snake;
    }
    const lastMovement = getMovementBetween(snake[1], snake[0]);
    return moveSnake(snake, lastMovement);
}
function turnSnake(snake: SnakeState, {direction}: SnakeTurnAction): SnakeState {
    const movement = getMovementForDirection(direction);
    return moveSnake(snake, movement);
}

const snakeReducer: SnakeReducer =
    (state: SnakeState = [], action: Action): SnakeState => {
        switch (action.type) {
            case TYPE_CRAWL: return moveSnakeForward(state);
            case TYPE_TURN: return turnSnake(state, action as SnakeTurnAction);
            default: return state;
        }
    };
export default snakeReducer;
