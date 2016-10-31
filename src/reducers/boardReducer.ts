import {Reducer, Action} from "redux";
import {BoardState} from "../types/state";
const boardReducer: Reducer<BoardState> =
    (state: BoardState = {columns: 0, rows: 0}, action: Action) => state;
export default boardReducer;
