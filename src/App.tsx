import React, { useCallback } from 'react';
import styled from 'styled-components';
import CheatSheetContainer from './containers/pixi/CheatSheetContainer';
import KanmusuInputContainer from './containers/input/KanmusuInputContainer';
import { saveBlob } from './lib/utils';

const Container = styled.div`
  padding: 8px;
`;

const App: React.FC = () => {
  const onClick = useCallback(() => {
    const cheatsheet = document.getElementById(
      'cheatsheet'
    ) as HTMLCanvasElement;
    cheatsheet.toBlob(blob => {
      if (blob) {
        saveBlob(blob, 'cheatsheet');
      }
    });
  }, []);
  return (
    <Container>
      <a
        href="https://github.com/CirnoV/blueprint-cheatsheet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <br />
      <br />
      <KanmusuInputContainer />
      <br />
      <button onClick={onClick}>Download</button>
      <br />
      <CheatSheetContainer />
    </Container>
  );
};

export default App;
