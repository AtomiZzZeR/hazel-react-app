import React from 'react';
import Styled from './About.styles';

const About = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Circle>
            <Styled.ImgHuman src={''} alt={'Woman'} />
            <Styled.Content>
              <Styled.ImgFigure
                src={''}
                alt={'Figure'}
              />
              <Styled.Title>About me</Styled.Title>
              <Styled.Description>
                A lifelong computer enthusiast and I would like to be allowed to
                work with one of the prestigious company. I am an excellent fit
                for a company given my passion and skills.{' '}
                <Styled.TextRead>Read more...</Styled.TextRead>
              </Styled.Description>
            </Styled.Content>
          </Styled.Circle>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default About;
