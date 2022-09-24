import styled from 'styled-components';

const Wrapper = styled.section`
  background: url('../images/bg-home.svg') 50% no-repeat;
`;

const Container = styled.div`
  max-width: 1166px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 179px 206px 389px;
`;

const Title = styled.h1`
  margin: 0px 0px 60px 0px;
  font-weight: bold;
  font-size: 3.75rem;
  line-height: 1.583;
`;

const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
`;

const Button = styled.button`
  color: #fff;
  font-size: 1.063rem;
  line-height: 1.529;
  border-radius: 30px;
`;

const ButtonContact = styled(Button)`
  padding: 12px 49px;
  background-color: #575879;
`;

const ButtonDownload = styled(Button)`
  padding: 12px 42.5px;
  background: linear-gradient(101.81deg, #c961de 25.84%, #3645a0 98.95%);
`;

const StyledHome = {
  Wrapper,
  Container,
  Inner,
  Title,
  BoxButtons,
  Button,
  ButtonContact,
  ButtonDownload,
};

export default StyledHome;
