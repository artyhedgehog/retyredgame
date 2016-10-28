import {Point} from '../types/state';

export const samePoint = (one: Point, another: Point): boolean => (
    one.x === another.x && one.y === another.y
);
export const adjacentValues = (one: number, another: number): boolean => {
    const delta = Math.abs(one - another);
    return delta < 2 && delta > 0;
};
export const adjacentPoints = (one: Point, another: Point): boolean => {
    return one.x === another.x && adjacentValues(one.y, another.y)
        || one.y === another.y && adjacentValues(one.x, another.x);
};
export const includesPoint = (pointsList: Point[], soughtPoint: Point): boolean => {
    for (let point of pointsList) {
        if (samePoint(point, soughtPoint)) {
            return true;
        }
    }
    return false;
};
