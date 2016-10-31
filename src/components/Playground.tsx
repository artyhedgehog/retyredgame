import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import PlaygroundRow, {Props as RowProps} from './PlaygroundRow';
import {connect, ActionCreator, MapDispatchToPropsObject} from 'react-redux';
import {crawl, up, down, left, right} from '../actionCreators/snake';
import {Action} from 'redux';

interface MappedDispatchProps {
    onCrawlButtonPressed: ActionCreator<Action>,
    onUpButtonPressed: ActionCreator<Action>,
    onDownButtonPressed: ActionCreator<Action>,
    onLeftButtonPressed: ActionCreator<Action>,
    onRightButtonPressed: ActionCreator<Action>,
}
interface OwnProps {
    rows: number,
    columns: number,
}
export interface Props extends OwnProps, MappedDispatchProps {}

const Playground: StatelessComponent<Props> =
    (props: Props): ReactElement<Props> => {
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
                <button onClick={props.onCrawlButtonPressed}>Crawl!</button>
                <button onClick={props.onUpButtonPressed}>Up</button>
                <button onClick={props.onDownButtonPressed}>Down</button>
                <button onClick={props.onLeftButtonPressed}>Left</button>
                <button onClick={props.onRightButtonPressed}>Right</button>
            </div>
        );
    };

Playground.propTypes = {
    rows: React.PropTypes.number.isRequired,
    columns: React.PropTypes.number.isRequired,
};

const mapDispatchToProps: MapDispatchToPropsObject = {
    onCrawlButtonPressed: crawl,
    onUpButtonPressed: up,
    onDownButtonPressed: down,
    onLeftButtonPressed: left,
    onRightButtonPressed: right,
};
export default connect<{}, MappedDispatchProps, OwnProps>(
    () => ({}),
    mapDispatchToProps
)(Playground);
