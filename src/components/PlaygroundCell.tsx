import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import {connect, MapStateToProps} from 'react-redux';
import {AppState, Point} from '../types/state';
import {samePoint, includesPoint} from '../helpers/points';

export enum Type {Empty, Snake, Food}
export interface Props extends Point {
    type?: Type,
    x: number,
    y: number,
}

const PlaygroundCell: StatelessComponent<Props> =
    (props: Props): ReactElement<Props> => {
        let typeClass: string;
        switch (props.type) {
        default:
        case Type.Empty:
            typeClass = 'empty';
            break;
        case Type.Snake:
            typeClass = 'snake';
            break;
        case Type.Food:
            typeClass = 'food';
            break;
        }
        return (
            <td>
                <div className={'cell ' + typeClass} >
                    {`{${props.x},${props.y}}`}
                </div>
            </td>
        );
    };
PlaygroundCell.propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
};

interface MappedStateProps {
    type?: Type,
}

const mapStateToProps: MapStateToProps<MappedStateProps, Props> =
    (state: AppState, props: Props): MappedStateProps => {
        if (samePoint(state.food, props)) {
            return {type: Type.Food};
        }
        if (includesPoint(state.snake, props)) {
            return {type: Type.Snake};
        }
        return {type: Type.Empty};
    };
export default connect<MappedStateProps, {}, Props>(mapStateToProps)(PlaygroundCell);
