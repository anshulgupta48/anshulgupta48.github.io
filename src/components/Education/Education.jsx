import React from 'react';
import { EducationContainer, Title, Desc, TimelineSection } from './EducationStyleComponents';
import { education } from '../../constants';
import EducationCard from './EducationCard';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Education = () => {
  return (
    <EducationContainer id='education-container'>
      <Title>Education</Title>
      <Desc>My education has been a journey of self-discovery and growth. My educational details are as follows.</Desc>

      <TimelineSection>
        <Timeline>
          {education.map((item, index) => (
            <TimelineItem key={index} data-aos="fade-up" data-aos-duration="800">
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <EducationCard education={item} />
              </TimelineContent>

              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector style={{ background: '#854CE6' }} />

                {index === (education.length - 1) && <TimelineDot variant="outlined" color="secondary" />}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </EducationContainer>
  )
}

export default Education;