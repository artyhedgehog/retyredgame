import {Action} from 'redux';

export enum Direction {Up, Down, Left, Right}

export type SnakeCrawlAction = Action;
export interface SnakeTurnAction extends Action {
    direction: Direction
}
