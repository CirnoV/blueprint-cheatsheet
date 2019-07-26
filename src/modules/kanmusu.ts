import { createStandardAction } from 'typesafe-actions';
import { createReducer, KanmusuList, parseKanmusuList } from '../lib/utils';

const UPDATE = 'kanmusu/UPDATE';

export const update = createStandardAction(UPDATE)<string>();

export type KanmusuState = {
  code: string;
  data: KanmusuList;
};

type Update = ReturnType<typeof update>;

const initialState: KanmusuState = {
  code: '',
  data: {}
};
const kanmusu = createReducer<KanmusuState>(
  {
    [UPDATE]: (_, action: Update) => {
      return {
        code: action.payload,
        data: parseKanmusuList(action.payload)
      };
    }
  },
  initialState
);

export default kanmusu;
