import React from 'react';
import { Link } from 'react-router-dom';
import Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.InlineHeader>
          <Link to={'/'}>
            <Styled.Link>Home</Styled.Link>
          </Link>
          <Link to={'/about'}>
            <Styled.Link>About me</Styled.Link>
          </Link>
          <Link to={'/'}>
            <Styled.Logo src={'../images/site-logo.svg'} alt={'Site logo'} />
          </Link>
          <Link to={'/work'}>
            <Styled.Link>Work</Styled.Link>
          </Link>
          <Link to={'/contact'}>
            <Styled.Link>Contact</Styled.Link>
          </Link>
        </Styled.InlineHeader>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
