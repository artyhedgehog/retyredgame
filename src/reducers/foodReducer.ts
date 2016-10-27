import {FoodReducer} from "../types/reducers";
import {Action} from "redux";
import {FoodState} from "../types/state";

const foodReducer: FoodReducer =
    (state: FoodState = {x: NaN, y: NaN}, action: Action): FoodState => {
        switch (action.type) {
        default:
            return state;
        }
    };
export default foodReducer;
