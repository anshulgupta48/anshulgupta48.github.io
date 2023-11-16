import React from 'react';
import { AboutContainer, AboutMainContainer, AboutBg, AboutInnerContainer, LeftAbout, Title, TextLoop, Span, SubTitle, ResumeButton, RightAbout, Img } from './AboutStyleComponents';
import AboutBgAnimation from './AboutBgAnimation/AboutBgAnimation';
import { Bio } from '../../constants';
import Typewriter from 'typewriter-effect';
import { AboutImage } from '../../assets/export';

const About = () => {
  return (
    <AboutContainer id='about-container'>
      <AboutMainContainer>
        <AboutBg>
          <AboutBgAnimation />
        </AboutBg>

        <AboutInnerContainer>
          <LeftAbout>
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>I am a
              <Span><Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true }} /> </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
          </LeftAbout>

          <RightAbout>
            <Img src={AboutImage} alt="About-Image" />
          </RightAbout>
        </AboutInnerContainer>
      </AboutMainContainer>
    </AboutContainer>
  )
}

export default About;