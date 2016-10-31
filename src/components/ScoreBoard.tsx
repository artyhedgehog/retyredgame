import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import {connect} from 'react-redux';

import {AppState} from '../types/state';


interface StateProps {
    score: number,
}
interface OwnProps {
}
export interface Props extends StateProps, OwnProps {
}

const ScoreBoard: StatelessComponent<Props> =
    (props: Props): ReactElement<Props> => (
        <div>
            Your current score is {props.score}!
        </div>
    );
ScoreBoard.propTypes = {
    score: React.PropTypes.number.isRequired,
};
const mapStateToProps = (state: AppState): StateProps => ({
    score: state.score,
});
export default connect<StateProps, {}, OwnProps>(mapStateToProps)(ScoreBoard);
