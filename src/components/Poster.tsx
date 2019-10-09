import React from 'react';
import styled from 'styled-components';

interface PosterProps {
  image: string;
}

const Poster: React.FC<PosterProps> = ({ image }) =>
    <Container src={image} alt="poster image" />;

const Container = styled.img`
  width: 100%;
`;

export default Poster;