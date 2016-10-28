import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import ScoreBoard from "./ScoreBoard";
import Playground from "./Playground";

export interface Props {
}

const Game: StatelessComponent<Props> = (props: Props): ReactElement<Props> => (
    <div>
        <ScoreBoard score={0}/>
        <Playground columns={20} rows={10}/>
    </div>
);
export default Game;
