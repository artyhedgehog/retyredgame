import {Point, Movement, Boundaries} from '../types/models';
import {Direction} from '../types/actions';

export const samePoint = (one: Point, another: Point): boolean => (
    one.x === another.x && one.y === another.y
);
export function adjacentValues (one: number, another: number): boolean {
    const delta = Math.abs(one - another);
    return delta < 2 && delta > 0;
}
export function adjacentPoints(one: Point, another: Point): boolean {
    return one.x === another.x && adjacentValues(one.y, another.y)
        || one.y === another.y && adjacentValues(one.x, another.x);
}
export function includesPoint(pointsList: Point[], soughtPoint: Point): boolean {
    for (let point of pointsList) {
        if (samePoint(point, soughtPoint)) {
            return true;
        }
    }
    return false;
}
export const getMovementBetween = (from: Point, to: Point): Movement => ({
    dX: to.x - from.x,
    dY: to.y - from.y,
});
export function getMovementForDirection(direction: Direction): Movement {
    switch (direction) {
        case Direction.Up:      return {dX:  0, dY: -1};
        case Direction.Down:    return {dX:  0, dY: +1};
        case Direction.Left:    return {dX: -1, dY:  0};
        case Direction.Right:   return {dX: +1, dY:  0};
    }
}
export const applyMovement = (from: Point, move: Movement): Point => ({
    x: from.x + move.dX,
    y: from.y + move.dY,
});

export const isInBoundaries = (point: Point, {minX, maxX, minY, maxY}: Boundaries):
    boolean => minX <= point.x && point.x <= maxX
        && minY <= point.y && point.y <= maxY;