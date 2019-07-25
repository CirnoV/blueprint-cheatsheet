import React from 'react';
import { Container, Sprite, Text } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';
import MaterialContainer from './MaterialContainer';

type ShipBannerProps = {
  x?: number;
  y?: number;
  id: number;
  image: string;
  level: number;
  exists?: number;
  material: {
    blueprint?: number;
    airmat?: number;
    catapult?: number;
    devmat?: number;
    gunmat?: number;
  };
};

const defaultProps = {
  x: 0,
  y: 0,
  exists: 0
};

/**
 * w: 300px
 * h: 60px
 */
const ShipBanner: React.FC<ShipBannerProps> = ({
  x,
  y,
  id,
  material,
  image,
  exists,
  level
}) => {
  const alpha = exists! > 0 ? 0.3 : 1.0;
  return (
    <Container x={x} y={y}>
      <Sprite image={`./img/banner/${image}`} alpha={alpha} />
      {exists && exists > 1 ? (
        <Text
          x={244}
          y={10}
          text={`x${exists}`}
          style={
            new TextStyle({
              fontSize: 24,
              fill: ['#d32f2f']
            })
          }
        />
      ) : (
        undefined
      )}
      <Text
        x={244}
        y={36}
        text={`Lv.${level}`}
        style={
          new TextStyle({
            fontSize: 21,
            fill: ['#af4448']
          })
        }
        alpha={alpha}
      />
      <MaterialContainer id={id} x={300} material={material} alpha={alpha} />
    </Container>
  );
};

ShipBanner.defaultProps = defaultProps;

export default ShipBanner;
