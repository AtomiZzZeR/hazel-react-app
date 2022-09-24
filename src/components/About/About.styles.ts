import styled from 'styled-components';

const Wrapper = styled.section`
  height: 1024px;
  background: url('../images/bg-about.jpg') 50% no-repeat;
`;

const Container = styled.div`
  max-width: 1166px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding: 188px 0px 0px 0px;
`;

const Circle = styled.div`
  display: flex;
  width: 620px;
  height: 620px;
  background: linear-gradient(136.45deg, #c961de 14.22%, #2954a3 97.01%);
  border-radius: 50%;
`;

const ImgHuman = styled.img``;

const Content = styled.div``;

const ImgFigure = styled.img``;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.5;
`;

const Description = styled.div``;

const TextRead = styled.span``;

const StyledAbout = {
  Wrapper,
  Container,
  Inner,
  Circle,
  ImgHuman,
  Content,
  ImgFigure,
  Title,
  Description,
  TextRead,
};

export default StyledAbout;
