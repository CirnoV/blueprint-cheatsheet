import React from 'react';
import { Container } from '@inlet/react-pixi';
import Material from './Material';

type MaterialContainerProps = {
  x?: number;
  y?: number;
  alpha?: number;
  id: number;
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
  y: 0
};

/**
 * w: 100px
 * h: 60px
 */
const MaterialContainer: React.FC<MaterialContainerProps> = ({
  x,
  y,
  alpha,
  id,
  material
}) => (
  <Container x={x} y={y} alpha={alpha}>
    {Object.entries(material).map(([mat, amount], idx) => {
      return (
        <Material
          x={72 * idx}
          key={`${id}-${mat}`}
          amount={amount}
          type={mat}
        />
      );
    })}
  </Container>
);

MaterialContainer.defaultProps = defaultProps;

export default MaterialContainer;
