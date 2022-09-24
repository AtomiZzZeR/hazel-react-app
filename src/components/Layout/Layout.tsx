import React from 'react';
import { About } from '../About';
import { Header } from '../Header';
import { Home } from '../Home';
import Styled from './Layout.styles';

const Layout = () => {
  return (
    <Styled.Wrapper>
      <Styled.Main>
        <Home>
          <Header />
        </Home>
        <About />
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Layout;
