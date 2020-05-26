import React from 'react';

import { Container, ComboBox } from './styles';
import Carrossel from '../../components/Carrossel/index';
import lib from '../../assets/img/lib.jpg';
import lib2 from '../../assets/img/harry.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Carrossel/>
    <Container>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <Link to="/lib">
          <button>Ver Mais</button>
          <img src={lib} alt="Julio Verne - Viagem ao Centro da Terra" />
        </Link>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Box Harry Potter - Coleção Completa</strong>
        </div>
        <Link to="/lib">
          <button>Ver Mais</button>
          <img src={lib2} alt="Julio Verne - Viagem ao Centro da Terra" />
        </Link>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <Link to="/lib">
          <button>Ver Mais</button>
          <img src={lib} alt="Julio Verne - Viagem ao Centro da Terra" />
        </Link>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Box Harry Potter - Coleção Completa</strong>
        </div>
        <Link to="/lib">
          <button>Ver Mais</button>
          <img src={lib2} alt="Julio Verne - Viagem ao Centro da Terra" />
        </Link>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <Link to="/lib">
          <button>Ver Mais</button>
          <img src={lib} alt="Julio Verne - Viagem ao Centro da Terra" />
        </Link>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Box Harry Potter - Coleção Completa</strong>
        </div>
        <Link to="/lib">
          <button>Ver Mais</button>
          <img src={lib2} alt="Julio Verne - Viagem ao Centro da Terra" />
        </Link>
      </ComboBox>
    </Container>
    </>
  );
}

export default Home;
