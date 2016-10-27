import {Action} from "redux";
import {SnakeState} from "../types/state";
import {SnakeReducer} from "../types/reducers";

const snakeReducer: SnakeReducer =
    (state: SnakeState = [], action: Action): SnakeState => {
        switch (action.type) {
        default:
            return state;
        }
    };
export default snakeReducer;
