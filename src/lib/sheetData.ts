import raw from './sheetData.json';

export type ShipData = {
  id: number;
  sprite: string;
  level: number;
  materials: {
    blueprint?: number;
    report?: number;
    gunmat?: number;
    airmat?: number;
    catapult?: number;
    devmat?: number;
  };
  convert?: number;
  only?: number;
};

export type SheetData = {
  [key: string]: ShipData[];
  BB: ShipData[];
  CV: ShipData[];
  CA: ShipData[];
  CL: ShipData[];
  DD: ShipData[];
};

export const sheetData: SheetData = raw as SheetData;
