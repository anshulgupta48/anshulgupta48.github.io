import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    color: #F2F3F499;
    width: 100%;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 400;
    @media (min-width: 1300px) {
        font-size: 17px;
    }
    @media (min-width: 1700px) {
        font-size: 18px;
    }
    @media (max-width: 800px){
        font-size: 13px;
    }
    @media (max-width: 500px){
        font-size: 12px;
    }
`;

const Span = styled.span`
    max-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 650px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    border: 0.1px solid #306EE8;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    position: relative;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    &:hover ${Document}{
        display: flex;
    }
    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    @media (max-width: 800px){
        padding: 10px;
        gap: 8px;
        width: 450px;
    }
    @media (max-width: 500px){
        width: 300px;
    }
    @media (max-width: 350px){
        width: 200px;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;

const Image = styled.img`
    height: 50px;
    margin-top: 4px;
    background-color: #000;
    border-radius: 10px;
    @media (max-width: 800px){
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;


const Role = styled.div`
    color: #F2F3F499;
    font-size: 18px;
    font-weight: 600;
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 800px){
        font-size: 16px;
    }
    @media (max-width: 500px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    color: #B1B2B399;
    font-size: 14px;
    font-weight: 500;
    @media (min-width: 1300px) {
        font-size: 16px;
    }
    @media (min-width: 1700px) {
        font-size: 18px;
    }
    @media (max-width: 800px){
        font-size: 13px;
    }
    @media (max-width: 500px){
        font-size: 12px;
    }
`;

const Date = styled.div`
    color: #B1B2B380;
    font-size: 12px;
    font-weight: 400;
    @media (min-width: 1300px) {
        font-size: 14px;
    }
    @media (min-width: 1700px) {
        font-size: 16px;
    }
    @media (max-width: 800px){
        font-size: 11px;
    }
    @media (max-width: 500px){
        font-size: 10px;
    }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: #B1B2B399;
    @media (min-width: 1300px) {
        font-size: 17px;
    }
    @media (min-width: 1700px) {
        font-size: 18px;
    }
    @media (max-width: 800px){
        font-size: 13px;
    }
    @media (max-width: 500px){
        font-size: 12px;
    }
`;




const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience.desc && <Span>{experience.desc}</Span>}
                {experience.skills && <> <br />
                    <Skills>
                        <b>Skills:</b>
                        <ItemWrapper>
                            {experience.skills.map((skill, index) => (
                                <Skill key={index}>• {skill}</Skill>
                            ))}
                        </ItemWrapper>
                    </Skills>
                </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard;