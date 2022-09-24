import React, { FC, PropsWithChildren } from 'react';
import Styled from './Home.styles';

const Home: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.Wrapper>
      {children}
      <Styled.Container>
        <Styled.Inner>
          <Styled.Title>
            Hazel Felix Ramos based in Tokushima Japan
          </Styled.Title>
          <Styled.BoxButtons>
            <Styled.ButtonContact>Contact me</Styled.ButtonContact>
            <Styled.ButtonDownload>Download CV</Styled.ButtonDownload>
          </Styled.BoxButtons>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Home;
