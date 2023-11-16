import React from 'react';
import { SkillsContainer, Title, Desc, SkillsBoxContainer, SkillBox, SkillBoxTitle, SkillBoxList, SkillBoxItem, SkillBoxImage } from './SkillsStyleComponents';
import { skills } from '../../constants';

const Skills = () => {
  return (
    <SkillsContainer id='skills-container'>
      <Title>Skills</Title>
      <Desc>Here are some of my skills on which I have been working on for the past 1 year.</Desc>

      <SkillsBoxContainer>
        {skills.map((skill, index) => (
          <SkillBox key={index} data-aos="fade-up" data-aos-duration="800">
            <SkillBoxTitle>{skill.title}</SkillBoxTitle>
            <SkillBoxList>
              {skill.skills.map((item, index) => (
                <SkillBoxItem key={index}>
                  <SkillBoxImage src={item.image} />
                  {item.name}
                </SkillBoxItem>
              ))}
            </SkillBoxList>
          </SkillBox>
        ))}
      </SkillsBoxContainer>
    </SkillsContainer>
  )
}

export default Skills;