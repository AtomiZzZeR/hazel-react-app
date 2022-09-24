import Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Content>
          <Styled.Link href={'#'}>Home</Styled.Link>
          <Styled.Link href={'#'}>About me</Styled.Link>
          <Styled.Link href={'#'}>
            <Styled.Logo src={'../images/site-logo.svg'} alt={'Site logo'} />
          </Styled.Link>
          <Styled.Link href={'#'}>Work</Styled.Link>
          <Styled.Link href={'#'}>Contact</Styled.Link>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
