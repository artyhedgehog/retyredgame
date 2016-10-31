import {Direction} from '../types/actions';
export const TYPE_CRAWL = 'crawl';
export const TYPE_TURN = 'turn';

export const crawl = () => ({type: TYPE_CRAWL});
export const up = () => ({type: TYPE_TURN, direction: Direction.Up});
export const down = () => ({type: TYPE_TURN, direction: Direction.Down});
export const left = () => ({type: TYPE_TURN, direction: Direction.Left});
export const right = () => ({type: TYPE_TURN, direction: Direction.Right});
