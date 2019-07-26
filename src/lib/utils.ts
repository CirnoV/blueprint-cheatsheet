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

export type KanmusuList = {
  [key: string]: number[];
};

export function parseKanmusuList(code: string): KanmusuList {
  const ver = code.slice(0, 2);
  if (ver === '.2') {
    return code
      .slice(3)
      .split('|')
      .map(s => s.split(':'))
      .reduce<KanmusuList>((acc, [shipId, shipData]) => {
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

export function getUrlParameter(sParam: string): string | null {
  return new URLSearchParams(window.location.search).get(sParam);
}

// Customized base64 decoding: http://kancolle-calc.net/data/share.js
export function decode64(inputString: string) {
  const BASE64 =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-';
  let dataString = '';
  let buff = '';
  for (let j = 0; j < inputString.length; j++) {
    let inp = BASE64.indexOf(inputString[j]).toString(2);
    while (inp.length < 6) {
      inp = '0' + inp;
    }
    buff += inp;
    while (buff.length >= 4) {
      const seg = buff.slice(0, 4);
      const pos = [
        '0000',
        '0001',
        '0010',
        '0011',
        '0100',
        '0101',
        '0110',
        '0111',
        '1000',
        '1001',
        '1010',
        '1011',
        '1100',
        '1101'
      ].indexOf(seg);
      if (pos === -1) {
        // Padding, do nothing
      } else if (pos === 10) {
        dataString += ',';
      } else if (pos === 11) {
        dataString += '|';
      } else if (pos === 12) {
        dataString += '.';
      } else if (pos === 13) {
        dataString += ':';
      } else {
        dataString += pos;
      }
      buff = buff.slice(4);
    }
  }
  return dataString;
}
