import React from 'react';
import { Container, Text } from '@inlet/react-pixi';
import ShipBanner from './ShipBanner';
import { TextStyle } from 'pixi.js';
import { ShipData } from '../lib/sheetData';
import { KanmusuCount } from '../lib/utils';

type ShipContainerProps = {
  x?: number;
  y?: number;
  name: string;
  sheetData: ShipData[];
  kanmusu: KanmusuCount;
};

const defaultProps = {
  x: 0,
  y: 0
};

/**
 * w: 100px
 * h: 60px
 */
const ShipContainer: React.FC<ShipContainerProps> = ({
  x,
  y,
  name,
  sheetData,
  kanmusu
}) => {
  return (
    <Container x={x} y={y ? y + 8 : 8}>
      <Text
        x={80}
        text={name}
        style={
          new TextStyle({
            fontFamily: "'Spoqa Han Sans', 'Spoqa Han Sans JP', sans-serif",
            fontSize: 21,
            fontWeight: '700'
          })
        }
      />
      <Container y={32}>
        {sheetData.map(
          ({ id, sprite, level, materials, convert, only }, idx) => {
            let exists = 0;
            if (kanmusu[id]) {
              const kanmuses = kanmusu[id]
                .filter(lv => lv >= level)
                .map(lv => String(lv).split('.'));
              exists = kanmuses.filter(lv => !lv[1]).length;
              if (convert) {
                exists += kanmuses.filter(
                  lv => lv[1] && Number(lv[1]) === convert
                ).length;
              }
              if (only) {
                exists = kanmuses.filter(lv => lv[1] && Number(lv[1]) === only)
                  .length;
              }
            }
            return (
              <ShipBanner
                key={id}
                y={idx * 60}
                id={id}
                material={materials}
                image={sprite}
                level={level}
                exists={exists}
              />
            );
          }
        )}
      </Container>
    </Container>
  );
};

ShipContainer.defaultProps = defaultProps;

export default ShipContainer;