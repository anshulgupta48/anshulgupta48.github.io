import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 50px 50px 50px;
    position: relative;
    scroll-margin-top: 80px;
    z-index: 1;
    @media (max-width: 650px) {
      padding: 20px 20px 50px 20px;
    }
`;

export const Title = styled.div`
    color: #F2F3F4;
    margin-bottom: 10px;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 45px;
    }
    @media (min-width: 1700px) {
        font-size: 50px;
    }
    @media (max-width: 800px) {
      font-size: 32px;
    }
`;

export const Desc = styled.div`
    color: #B1B2B3;
    max-width: 600px;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 800px) {
        font-size: 16px;
    }
`;

export const SkillsBoxContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    @media (max-width: 500px) {
        gap: 15px;
    }
`

export const SkillBox = styled.div`
    width: 100%;
    max-width: 420px;
    padding: 18px 36px;
    background-color: #171721;
    border: 0.1px solid #854CE6;
    border-radius: 16px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  `;

export const SkillBoxTitle = styled.h2`
    color: #B1B2B3;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 30px;
    }
    @media (min-width: 1700px) {
        font-size: 32px;
    }
`;

export const SkillBoxList = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center; 
    gap: 12px;
    flex-wrap: wrap;
`;

export const SkillBoxItem = styled.div`
    color:  #F2F3F480;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #F2F3F480;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    @media (min-width: 1300px) {
        font-size: 18px;
    }
    @media (min-width: 1700px) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 14px;
    }
    @media (max-width: 500px) {
        padding: 6px 12px;
    }
`;

export const SkillBoxImage = styled.img`
    height: 24px;
    width: 24px;
    @media (min-width: 1300px) {
        height: 27px;
        width: 27px;
    }
    @media (min-width: 1700px) {
        height: 30px;
        width: 30px;
    }
`;