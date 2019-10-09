import React from 'react';
import styled from 'styled-components';

interface LogoCaptionProps {
  logo: string;
  caption: string;
}

const LogoCaption: React.FC<LogoCaptionProps> = ({ logo, caption }) =>
  <Container>
    <Logo src={logo} alt="logo" />
    <Caption>{caption}</Caption>
  </Container>;

const Container = styled.div`
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

export default LogoCaption;

