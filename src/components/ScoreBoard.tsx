import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';

export interface Props {
    score: number,
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
export default ScoreBoard;
