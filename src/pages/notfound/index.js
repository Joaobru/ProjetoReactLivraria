import React from 'react';

import Error from '../../assets/img/2488756.jpg';
import { Container } from './styles';

function Notfound() {
  return (
    <Container>
      <img src={Error} alt="404" />
    </Container>
  );
}

export default Notfound;
