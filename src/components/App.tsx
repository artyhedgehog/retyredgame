import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StatelessComponent} from '@types/react';
import appReducer from "../reducers/appReducer";
import Game from "./Game";
import {AppState} from "../types/state";

export interface Props {
}

const initialState: AppState = {
    snake: [{x: 3, y: 3}, {x: 3, y: 4}, {x: 3, y: 5}, {x: 2, y: 5}],
    food: {x: 16, y: 8},
    score: 0,
};
const store = createStore(appReducer, initialState);

const App: StatelessComponent<Props> = (props: Props, context: any) => (
    <Provider store={store}>
        <Game/>
    </Provider>
);
export default App;
