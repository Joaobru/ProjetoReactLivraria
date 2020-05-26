import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, Main } from './styles';
import Header from '../../../components/Header';

export default function Defaultlayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Main>{children}</Main>
      </Content>
    </Wrapper>
  );
}

Defaultlayout.propTypes = {
  children: PropTypes.element.isRequired,
};
