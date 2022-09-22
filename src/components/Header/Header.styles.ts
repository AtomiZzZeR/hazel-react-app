import styled from 'styled-components';

const Header = styled.header``;

const Container = styled.div`
  width: 1156px;
  margin: 0px auto;
`;

const InlineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 172px;
  padding: 34px 0px;
  height: 136px;
`;

const Logo = styled.img`
  display: inline-block;
`;

const Link = styled.span`
  display: inline-block;
  padding: 10px;
  font-weight: 500;
`;

const StyledHeader = {
  Header,
  Container,
  InlineHeader,
  Logo,
  Link,
};

export default StyledHeader;
