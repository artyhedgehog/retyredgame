import {Reducer} from "redux";
import {FoodState, ScoreState, SnakeState} from "./state";

export type FoodReducer = Reducer<FoodState>;
export type ScoreReducer = Reducer<ScoreState>;
export type SnakeReducer = Reducer<SnakeState>;
