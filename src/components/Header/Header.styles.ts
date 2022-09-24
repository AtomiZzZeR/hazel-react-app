import styled from 'styled-components';

const Wrapper = styled.header``;

const Container = styled.div`
  max-width: 1166px;
  margin: 0px auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  padding: 34px 178px;
`;

const Link = styled.a`
  padding: 10px;
  font-weight: 500;
  font-size: 1.063rem;
  line-height: 152.941%;
`;

const Logo = styled.img``;

const StyledHeader = {
  Wrapper,
  Container,
  Content,
  Link,
  Logo,
};

export default StyledHeader;
