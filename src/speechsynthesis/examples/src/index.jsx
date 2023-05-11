import React from 'react';
import { render } from 'react-dom';
import SpeechSynthesisExample from './useSpeechSynthesis';
import { GlobalStyles, Row, GitLink, Title } from './shared';

const App = () => (
  <div>
    <GlobalStyles />
    <Title>
      {'react-speech-kit '}

    </Title>
    <Row>
      <SpeechSynthesisExample />
    </Row>
    
  </div>
);

render(<App />, document.getElementById('root'));
