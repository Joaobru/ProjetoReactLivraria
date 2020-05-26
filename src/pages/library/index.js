import React from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

import { Container, Badge, Media } from './styles';
import lib from '../../assets/img/lib.jpg';

function Library() {
  return (
    <Container>
      <Media>
        <img src={lib} alt="Julio Verne - Viagem ao Centro da Terra" />
      </Media>
      <div>
        <strong>Julio Verne - Viagem ao Centro da Terra</strong>
        <div>
          <h3>
            Viagem ao Centro da Terra trata-se de uma aventura protagonizada por
            Otto Lidenbrock, pelo sobrinho Axel e pelo guia Hans Bjelke.
            Acredita-se que a história tenha sido inspirada em uma viagem que o
            próprio Verne teria feito para a Noruega e para outros países
            escandinavos. <Link to="/description">...Ver Mais</Link>
          </h3>
        </div>
      </div>
      <Badge>
        <button>R$ 50,00</button>
      </Badge>
      <Link to="/cart">
        <footer>
          <h5>Adicionar ao Carrinho</h5>
          <button>
            <GoPlus size={35} />
          </button>
        </footer>
      </Link>
    </Container>
  );
}

export default Library;
