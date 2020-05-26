import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes/index';
import GlobalStyle from './styles/global';
import history from './service/history';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
