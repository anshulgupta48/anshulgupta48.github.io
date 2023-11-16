import React from 'react';
import { ExperianceContainer, Title, Desc, TimelineSection } from './ExperienceStyleComponents';
import { experiences } from '../../constants';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';

const Experiance = () => {
  return (
    <ExperianceContainer id='experience-container'>
      <Title>Experiance</Title>
      <Desc>My work experience as a Web Developer & working on different companies and projects.</Desc>

      <TimelineSection>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem key={index} data-aos="fade-up" data-aos-duration="800">
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector style={{ background: '#854CE6' }} />

                {index === (experiences.length - 1) && <TimelineDot variant="outlined" color="secondary" />}
              </TimelineSeparator>

              <TimelineContent sx={{ px: { xs: '5px', sm: '16px' }, py: '12px' }}>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </ExperianceContainer>
  )
}

export default Experiance;