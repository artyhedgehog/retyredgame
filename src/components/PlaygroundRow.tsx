import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import PlaygroundCell, {Props as CellProps} from "./PlaygroundCell";

export interface Props {
    y: number,
    columns: number,
}

const PlaygroundRow: StatelessComponent<Props> =
    (props: Props): ReactElement<Props> => {
        //noinspection JSMismatchedCollectionQueryUpdate
        const cells: ReactElement<CellProps>[] = [];
        for (let x = 0; x < props.columns; ++x) {
            cells.push(<PlaygroundCell key={x} x={x} y={props.y}/>);
        }
        return (
            <tr>{cells}</tr>
        );
    };
PlaygroundRow.propTypes = {
    y: React.PropTypes.number.isRequired,
    columns: React.PropTypes.number.isRequired,
};
export default PlaygroundRow;