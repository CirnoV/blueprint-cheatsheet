import { combineReducers } from 'redux';
import kanmusu, { KanmusuState } from './kanmusu';

export type RootState = {
  kanmusu: KanmusuState;
};

const rootReducer = combineReducers({
  kanmusu
});

export default rootReducer;
