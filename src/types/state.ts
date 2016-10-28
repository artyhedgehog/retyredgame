import {SnakeReducer, FoodReducer, ScoreReducer} from './reducers';
import {ReducersMapObject} from 'redux';
import {Point} from './models';

export type SnakeState = Point[];
export type FoodState = Point;
export type ScoreState = number;

export interface AppState {
    snake: SnakeState,
    food: FoodState,
    score: ScoreState,
}

export interface AppStateReducersMap extends ReducersMapObject {
    snake: SnakeReducer,
    food: FoodReducer,
    score: ScoreReducer,
}

