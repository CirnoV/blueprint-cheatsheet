import React from 'react';
import { Container, Sprite, Text } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';

type MaterialProps = {
  x?: number;
  y?: number;
  type: 'airmat' | 'blueprint' | 'catapult' | 'devmat' | 'gunmat' | string;
  amount?: number;
};

const defaultProps = {
  x: 0,
  y: 0,
  amount: 1
};

/**
 * w: 100px
 * h: 60px
 */
const Material: React.FC<MaterialProps> = ({ x, y, type, amount }) => (
  <Container x={x} y={y}>
    <Sprite y={8} image={`./img/item/${type}.png`} scale={0.6} />
    <Text
      x={47}
      y={30}
      text={`x${amount}`}
      style={
        new TextStyle({
          fontSize: 21
        })
      }
    />
  </Container>
);

Material.defaultProps = defaultProps;

export default Material;
