import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {StatelessComponent} from '@types/react';
import appReducer from "../reducers/appReducer";
import Snake from "./Snake";

export interface Props {
}

const store = createStore(appReducer);

const App: StatelessComponent<Props> = (props: Props, context: any) => (
    <Provider store={store}>
        <Snake/>
    </Provider>
);
export default App;
