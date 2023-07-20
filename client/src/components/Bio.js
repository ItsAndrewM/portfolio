import styled from "styled-components/macro";

const Bio = () => {
  return (
    <Section id="bio">
      <Wrapper>
        <Container>
          <P>
            👋 Hello! I'm a full-stack web developer from Victoria, BC! My name
            is
          </P>
          <H1>Andrew McMillan</H1>
          <H1v2>I build things for the web.</H1v2>
        </Container>
        <Container>
          <P2>
            I'm a Software Developer specializing in building full stack
            e-commerce web applications.
          </P2>
        </Container>
        <Container>
          <Button>Click here or something</Button>
        </Container>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-md);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--gap-md);
  flex-wrap: nowrap;
`;

const P = styled.p`
  width: 100%;
`;

const H1 = styled.h1`
  width: 100%;
`;

const P2 = styled.p`
  width: 100%;
`;

const H1v2 = styled.h1`
  width: 100%;
  color: var(--green);
`;

const Button = styled.button``;
export default Bio;
