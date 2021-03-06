import Head from "next/head";
import styled from "styled-components"

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.div`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>CONTACT</Heading>
      </Hero>
    </>
  );
}
