import styled from "styled-components/macro";
import profile from "../assets/images/andrewHead.jpg";
import { aboutMe } from "../data/aboutMe";

const About = () => {
  return (
    <Section id="about">
      <Wrapper>
        <TextContainer>
          <Container>
            <H2>About Me</H2>
          </Container>
          <P>{aboutMe.intro}</P>
          <P>{aboutMe.current}</P>
          <P>{aboutMe.other}</P>
          <P>{aboutMe.tech.intro}</P>
          <Ul>
            {aboutMe.tech.tech.map((t, index) => {
              return <Li key={index}>{t}</Li>;
            })}
          </Ul>
        </TextContainer>
        <ImageContainer>
          <Img src={profile} />
        </ImageContainer>
      </Wrapper>
    </Section>
  );
};

const Img = styled.img`
  border-radius: 50%;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-sm);
`;

const Li = styled.li`
  width: 45%;
`;

const P = styled.p``;

const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--gap-md);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 60%;
  display: flex;
  justify-content: center;
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

const H2 = styled.h2`
  font-size: clamp(26px, 5vw, var(--font-lg));
  &::before {
    counter-increment: section 1;
    content: "0" counter(section) ". ";
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -16px;
    width: 300px;
    height: 1px;
    margin-left: 250px;
    background-color: var(--green);
    color: var(--green);
  }
`;

export default About;
