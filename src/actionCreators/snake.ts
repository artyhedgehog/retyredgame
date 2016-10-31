import {ActionCreator} from 'redux';
import {Direction, SnakeCrawlAction, SnakeTurnAction} from '../types/actions';

export const TYPE_CRAWL = 'crawl';
export const TYPE_TURN = 'turn';

export const crawl: ActionCreator<SnakeCrawlAction> =
    (): SnakeCrawlAction => ({type: TYPE_CRAWL});

export const turn: ActionCreator<SnakeTurnAction> =
    (direction: Direction): SnakeTurnAction => ({type: TYPE_TURN, direction});

export const up    = () => turn(Direction.Up);
export const down  = () => turn(Direction.Down);
export const left  = () => turn(Direction.Left);
export const right = () => turn(Direction.Right);
