import React from 'react';
import { render } from 'react-dom';
import SpeechSynthesisExample from '../react-speech-kit-master/examples/src/useSpeechSynthesis';
import { GlobalStyles, Row, GitLink, Title } from './shared';

const Anxiety=()=>{
    return(

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
}

export default Anxiety;