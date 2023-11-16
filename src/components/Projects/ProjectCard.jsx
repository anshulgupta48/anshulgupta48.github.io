import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    height: 390px;
    width: 330px;
    padding: 26px 20px;
    background-color: #171721;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    @media (max-width: 500px) {
        height: 400px;
        width: 300px;
    }
    @media (max-width: 350px) {
        height: 400px;
        width: 250px;
    }
`;

const Image = styled.img`
    height: 180px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const TagsContainer = styled.div`
    width: 100%;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    color: #854ce6;
    background-color: #854ce615;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 400;
    @media (min-width: 1300px) {
        font-size: 14px;
    }
    @media (min-width: 1700px) {
        font-size: 16px;
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #b1b2b3;
    max-width: 100%;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 1300px) {
        font-size: 22px;
    }
    @media (min-width: 1700px) {
        font-size: 24px;
    }
`;

const Description = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: 100%;
    margin-top: 8px;
    color: #b1b2b399;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 1300px) {
        font-size: 17px;
    }
    @media (min-width: 1700px) {
        font-size: 18px;
    }
`




const ProjectCard = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} />

            <TagsContainer>
                {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </TagsContainer>

            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Details>
        </Card>
    )
}

export default ProjectCard;