import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import ScoreBoard from './ScoreBoard';
import Playground from './Playground';

export interface Props {
}

const Game: StatelessComponent<Props> = (props: Props): ReactElement<Props> => (
    <div>
        <ScoreBoard />
        <Playground />
    </div>
);
export default Game;
