import {SnakeReducer, FoodReducer, ScoreReducer} from './reducers';
import {ReducersMapObject} from 'redux';
import {Point} from './models';

export type SnakeState = Point[];
export type FoodState = Point;
export type ScoreState = number;
export interface BoardState {
    rows: number,
    columns: number,
}
export enum GameStatus {Ready, Running, Over}

export interface AppState {
    snake: SnakeState,
    food: FoodState,
    score: ScoreState,
    board: BoardState,
    status: GameStatus,
}

export interface AppStateReducersMap extends ReducersMapObject {
    snake: SnakeReducer,
    food: FoodReducer,
    score: ScoreReducer,
}

