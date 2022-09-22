import Styled from './Layout.styles';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../Header';

const Layout = () => {
  return (
    <Styled.Wrapper>
      <Header />

      <Styled.Main>
        <Outlet />
      </Styled.Main>

      <Styled.Footer></Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Layout;
