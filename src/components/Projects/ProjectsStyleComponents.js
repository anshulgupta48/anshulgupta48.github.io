import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 80px 0px;
    scroll-margin-top: 80px;
    position: relative;
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 99%, 0 100%);
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
        margin: 0px 10px;
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    @media (max-width: 500px) {
        margin-top: 30px;
    }
`;
