import { Fragment } from "react";
import styled from "styled-components/macro";
import { HashLink } from "react-router-hash-link";
import Bio from "../components/Bio";
import About from "../components/About";

//https://brittanychiang.com/

const Home = () => {
  return (
    <Wrapper>
      <Bio />
      <About />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
`;

export default Home;
