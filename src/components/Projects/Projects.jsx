import React from 'react';
import { ProjectContainer, Title, Desc, CardContainer } from './ProjectsStyleComponents';
import { projects } from '../../constants';
import ProjectCard from './ProjectCard';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <ProjectContainer id='projects-container'>
      <Title>Projects</Title>
      <Desc>Here are some of my projects on which i have worked during my Web Development Journey.</Desc>

      <CardContainer>
        {
          projects.map((project, index) => (
            <ProjectCard project={project} key={index} openModal={openModal} setOpenModal={setOpenModal}  data-aos="fade-up" data-aos-duration="800"></ProjectCard>
          ))
        }
      </CardContainer>
    </ProjectContainer>
  )
}

export default Projects;