import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import PlaygroundRow, {Props as RowProps} from "./PlaygroundRow";

export interface Props {
    rows: number,
    columns: number,
}

const Playground: StatelessComponent<Props> = (props: Props) => {
    //noinspection JSMismatchedCollectionQueryUpdate - inspector is wrong
    const rows: ReactElement<RowProps>[] = [];
    for (let y = 0; y < props.rows; ++y) {
        rows.push(<PlaygroundRow key={y} columns={props.columns} y={y} />)
    }
    return (
        <div className="playground">
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <button onClick={() => {console.log('Tried to score');}}>
                Score!
            </button>
        </div>
    );
};
Playground.propTypes = {
    rows: React.PropTypes.number.isRequired,
    columns: React.PropTypes.number.isRequired,
};
export default Playground;
