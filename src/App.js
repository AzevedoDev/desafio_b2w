import React, { Fragment } from 'react';
import MainBox from './pages/MainBox';
import GlobalStyle from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <MainBox />
  </Fragment>
);

export default App;
