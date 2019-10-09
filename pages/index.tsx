import styled from 'styled-components';
import { NextPage } from 'next';

const IndexPage: NextPage = () =>
  <Title>Index Page</Title>;

export default IndexPage;

const Title = styled.h1`
  color: red;
`;
