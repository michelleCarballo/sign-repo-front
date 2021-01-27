import React from 'react'
import { useHistory } from 'react-router';
import {goToPdf} from '../routes/goToPage'
import {HomeP} from './styled-page'



function Home() {
  const history = useHistory();

  return (
    <HomeP >
      <button onClick={() => goToPdf(history)}>Abrir arquivo</button>
    </HomeP>
  );
}

export default Home;

// meu mano socorro odeio git