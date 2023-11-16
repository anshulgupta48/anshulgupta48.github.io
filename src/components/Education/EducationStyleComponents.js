import styled from "styled-components";

export const EducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 50px 0px;
    scroll-margin-top: 80px;
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
    color: #B1B2B3;
    max-width: 600px;
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