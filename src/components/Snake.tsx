import * as React from 'react';
import {ReactElement, StatelessComponent} from '@types/react';
import ScoreBoard from "./ScoreBoard";
import Playground from "./Playground";

export interface Props {
}

const Snake: StatelessComponent<Props> = (props: Props): ReactElement<Props> => (
    <div>
        <ScoreBoard score={0}/>
        <Playground/>
    </div>
);
export default Snake;
