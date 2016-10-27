import * as React from 'react';

export interface Props {
}
const Playground = (props: Props) => (
    <div>
        <button onClick={() => {console.log('Tried to score');}}>
            Score!
        </button>
    </div>
);
export default Playground;
