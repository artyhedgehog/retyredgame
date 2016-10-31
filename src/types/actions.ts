import {Action} from 'redux';
import {GameStatus} from './state';

export enum Direction {Up, Down, Left, Right}

export type SnakeCrawlAction = Action;
export interface SnakeTurnAction extends Action {
    direction: Direction,
}
export interface GameSetStatusAction extends Action {
    status: GameStatus,
}
