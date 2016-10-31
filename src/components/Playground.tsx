import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import {Action} from 'redux';
import {connect, ActionCreator, MapDispatchToPropsObject} from 'react-redux';

import PlaygroundRow, {Props as RowProps} from './PlaygroundRow';
import {crawl, up, down, left, right} from '../actionCreators/snake';
import {SnakeCrawlAction, SnakeTurnAction} from '../types/actions';
import {score} from '../actionCreators/score';


interface MappedDispatchProps {
    onScoreButtonPressed: ActionCreator<Action>,
    onCrawlButtonPressed: ActionCreator<SnakeCrawlAction>,
    onUpButtonPressed: ActionCreator<SnakeTurnAction>,
    onDownButtonPressed: ActionCreator<SnakeTurnAction>,
    onLeftButtonPressed: ActionCreator<SnakeTurnAction>,
    onRightButtonPressed: ActionCreator<SnakeTurnAction>,
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
                    <tfoot>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={props.onScoreButtonPressed}>
                                    Score!
                                </button>
                            </td>
                            <td colSpan={2} />
                            <td colSpan={2}>
                                <button onClick={props.onUpButtonPressed}>
                                    Up
                                </button>
                            </td>
                            <td colSpan={2} />
                        </tr>
                        <tr>
                            <td colSpan={2} />
                            <td colSpan={2}>
                                <button onClick={props.onLeftButtonPressed}>
                                    Left
                                </button>
                            </td>
                            <td colSpan={2}>
                                <button onClick={props.onCrawlButtonPressed}>
                                    Crawl!
                                </button>
                            </td>
                            <td colSpan={2}>
                                <button onClick={props.onRightButtonPressed}>
                                    Right
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} />
                            <td colSpan={2} />
                            <td colSpan={2}>
                                <button onClick={props.onDownButtonPressed}>
                                    Down
                                </button>
                            </td>
                            <td colSpan={2} />
                        </tr>
                    </tfoot>
                </table>



            </div>
        );
    };

Playground.propTypes = {
    rows: React.PropTypes.number.isRequired,
    columns: React.PropTypes.number.isRequired,
};

const mapDispatchToProps: MapDispatchToPropsObject = {
    onScoreButtonPressed: score,
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
