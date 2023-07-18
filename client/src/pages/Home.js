import { Fragment } from "react";
import styled from "styled-components";
import Test from "./Test";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <Fragment>
      <Wrapper>
        <HashLink to="#test">This is a link</HashLink>
      </Wrapper>
      <Test />
    </Fragment>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
`;

export default Home;
