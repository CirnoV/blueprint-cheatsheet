import { createStandardAction } from 'typesafe-actions';
import { createReducer, KanmusuCount, parseKanmusuList } from '../lib/utils';

const UPDATE = 'kanmusu/UPDATE';

export const update = createStandardAction(UPDATE)<string>();

export type KanmusuState = KanmusuCount;

type Update = ReturnType<typeof update>;

const initialState: KanmusuState = {};
const kanmusu = createReducer<KanmusuState>(
  {
    [UPDATE]: (_, action: Update) => {
      return parseKanmusuList(action.payload);
    }
  },
  initialState
);

export default kanmusu;
