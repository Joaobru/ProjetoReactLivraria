import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';

import lib from '../../assets/img/lib.jpg';
import lib2 from '../../assets/img/harry.png';
import { Container, ComboBox } from './styles';

function Cart() {
  return (
    <Container>
      <div>
        <strong>CARRINHO</strong>
        <FiShoppingCart size={30} />
      </div>

        <ComboBox>
          <div>
            <img src={lib} alt="Julio Verne - Viagem ao Centro da Terra" />
              <strong>Julio Verne - Viagem ao Centro da terra</strong>
              <label>R$ 45,00</label>
          </div>
        </ComboBox>

        <ComboBox>
          <div>
            <img src={lib2} alt="Box Harry Potter - Coleção Completa" />
            <strong>Box Harry Potter - Coleção Completa</strong>
            <label>R$ 50,00</label>
          </div>
        </ComboBox>

        <ComboBox>
          <div>
            <img src={lib} alt="Julio Verne - Viagem ao Centro da Terra" />
            <strong>Julio Verne - Viagem ao Centro da terra</strong>
            <label>R$ 45,00</label>
          </div>
        </ComboBox>

        <ComboBox>
          <div>
            <img src={lib2} alt="Box Harry Potter - Coleção Completa" />
            <strong>Box Harry Potter - Coleção Completa</strong>
            <label>R$ 50,00</label>
          </div>
        </ComboBox>

      <footer>
        <h5>Finalizar Compra</h5>
        <button>
          <MdPayment size={35} />
        </button>
      </footer>
    </Container>
  );
}

export default Cart;
