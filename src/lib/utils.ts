export type Handlers<T> = {
  [type: string]: (state: T, action: any) => T;
};

export function createReducer<S>(handlers: Handlers<S>, initialState: S) {
  return (state: S = initialState, action: any) => {
    const handler = handlers[action.type];
    if (!handler) return state;
    return handler(state, action);
  };
}

export type KanmusuCount = {
  [key: string]: number[];
};

export function parseKanmusuList(code: string): KanmusuCount {
  const ver = code.slice(0, 2);
  if (ver === '.2') {
    return code
      .slice(3)
      .split('|')
      .map(s => s.split(':'))
      .reduce<KanmusuCount>((acc, [shipId, shipData]) => {
        acc[shipId] = shipData.split(',').map(Number);
        return acc;
      }, {});
  }
  return {};
}

export function saveBlob(blob: Blob, fileName: string) {
  let url = window.URL;
  let dataUrl = url.createObjectURL(blob);
  let event = document.createEvent('MouseEvents');
  event.initMouseEvent(
    'click',
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  let a = document.createElementNS(
    'http://www.w3.org/1999/xhtml',
    'a'
  ) as HTMLElement & any;
  a.href = dataUrl;
  a.download = fileName;
  a.dispatchEvent(event);
}
