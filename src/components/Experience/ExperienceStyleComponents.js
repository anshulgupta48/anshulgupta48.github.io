import styled from 'styled-components';

export const ExperianceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px 70px 0px;
    scroll-margin-top: 80px;
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
    position: relative;
    z-index: 1;
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
    max-width: 600px;
    color: #B1B2B3;
    font-size: 18px;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 800px) {
        font-size: 16px;
        margin: 0px 10px;
    }
`;

export const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    @media (max-width: 300px) {
        align-items: flex-end;
    }
`;