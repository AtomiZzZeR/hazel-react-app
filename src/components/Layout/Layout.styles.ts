import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: url('../images/HomePage.jpg') #f103fa;
`;

const Container = styled.div`
  width: 1440px;
  margin: 0px auto;
`;

const Header = styled.header``;

const Main = styled.main`
  flex: 1 1 auto;
`;

const Footer = styled.footer``;

const StyledLayout = {
  Wrapper,
  Container,
  Header,
  Main,
  Footer,
};

export default StyledLayout;
