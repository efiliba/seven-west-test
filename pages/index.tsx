import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NextPage } from 'next';
import { Card } from '../src/modules';

const IndexPage: NextPage = () =>
  <>
    <GlobalStyle />
    <Card image="/tile.jpg" logo="/logo.png" caption="Home and Away" />
  </>;

export default IndexPage;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
