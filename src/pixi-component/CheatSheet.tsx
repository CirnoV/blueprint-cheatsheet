import React from 'react';
import { Stage, Container } from '@inlet/react-pixi';
import ShipContainer from './ShipContainer';
import { KanmusuCount } from '../lib/utils';
import { sheetData } from '../lib/sheetData';

type CheatSheetProps = {
  kanmusu: KanmusuCount;
};

const CheatSheet: React.FC<CheatSheetProps> = ({ kanmusu }) => (
  <Stage
    id="cheatsheet"
    width={1170}
    height={1510}
    options={{ backgroundColor: 0xffffff, preserveDrawingBuffer: true }}
  >
    <Container>
      <ShipContainer
        name="- 戦艦 -"
        kanmusu={kanmusu}
        sheetData={sheetData.BB}
      />
      <ShipContainer
        y={700}
        name="- 空母 -"
        kanmusu={kanmusu}
        sheetData={sheetData.CV}
      />
    </Container>
    <Container x={700}>
      <ShipContainer
        name="- 重巡 -"
        kanmusu={kanmusu}
        sheetData={sheetData.CA}
      />
      <ShipContainer
        y={400}
        name="- 軽巡 -"
        kanmusu={kanmusu}
        sheetData={sheetData.CL}
      />
      <ShipContainer
        y={680}
        name="- 駆逐 -"
        kanmusu={kanmusu}
        sheetData={sheetData.DD}
      />
    </Container>
  </Stage>
);

export default CheatSheet;
