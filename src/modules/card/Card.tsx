import React from 'react';
import styled from 'styled-components';
import { Poster, LogoCaption } from '../../components';

interface CardProps {
  image: string;
  logo: string;
  caption: string;
}

const Card: React.FC<CardProps> = ({ image, logo, caption }) =>
  <Container>
    <Poster image={image} />
    <LogoCaption logo={logo} caption={caption} />
  </Container>;

const Container = styled.div`
  display: flex;
  position: relative;
  min-width: 20rem;
  max-width: 50rem;
  margin: 0 auto;
`;

export default Card;
