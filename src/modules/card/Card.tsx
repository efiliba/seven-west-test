import styled from 'styled-components';

interface CardProps {
  image: string
  logo: string
  caption: string
}

const Card: React.FC<CardProps> = ({ image, logo, caption }) =>
  <Container>
    <Poster src={image} alt="poster image" />
    <LogoCaption>
      <Logo src={logo} alt="logo" />
      <Caption>{caption}</Caption>
    </LogoCaption>
  </Container>;


const Container = styled.div`
  display: flex;
  position: relative;
  min-width: 20rem;
  max-width: 50rem;
  margin: 0 auto;
`;

const Poster = styled.img`
  width: 100%;
`;

const LogoCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 30%;
  background-color: rgba(0, 0, 0, .5);
`;

const Logo = styled.img`
  height: 80%;
  padding: 0 .5rem;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

const Caption = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  letter-spacing: -.05em;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3.4rem;
  }
`;

export default Card;
