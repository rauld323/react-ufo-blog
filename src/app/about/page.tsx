"use client";
import styled from "styled-components";

export default function About() {
  return (
    <AboutMeContainer>
      <h1>BurningSky A.i</h1>
      <ResponsiveImage
        src="https://nu.aeon.co/images/7d7b2f98-4775-4462-a5d7-078c55e558fb/idea_sied-sid-mosdell-5253662054_de602ff2ca_o.jpg"
        alt="reptile"
      />
      <ResponsiveText>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </ResponsiveText>
    </AboutMeContainer>
  );
}
const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResponsiveImage = styled.img`
  max-width: 60%;
  height: auto;
`;

const ResponsiveText = styled.p`
  max-width: 80%;
  height: auto;
`;
