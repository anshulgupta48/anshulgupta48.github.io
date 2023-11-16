import styled from "styled-components";

export const AboutContainer = styled.div`
    scroll-margin-top: 50px;
`;

export const AboutMainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #191924;
    padding: 120px 50px 50px 50px;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    z-index: 1;
    @media (max-width: 1000px) {
        padding: 90px 50px 50px 50px;
    }
    @media (max-width: 650px) {
        padding: 90px 20px 50px 20px;
    }
`;

export const AboutBg = styled.div`
    position: absolute;
    top: 60%;
    left: 48%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    overflow: hidden;
    transform: translateX(-50%) translateY(-50%);
    @media (min-width: 1300px) {
        left: 45%;
    }
    @media (min-width: 1700px) {
        left: 38%;
    }
    @media (max-width: 1000px) {
        top: 42%;
        left: 50%;
        justify-content: center;
        padding: 0px;
    }
    @media (max-width: 500px) {
        top: 50%;
    }
`;

export const AboutInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        gap: 20px;
    }
`;

export const LeftAbout = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
    color: #F2F3F4;
    font-size: 50px;
    font-weight: 700;
    line-height: 68px;
    @media (min-width: 1300px) {
        font-size: 55px;
    }
    @media (min-width: 1700px) {
        font-size: 60px;
    }
    @media (max-width: 1000px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        font-size: 40px;
        line-height: 48px;
    }
    @media (max-width: 500px) {
        font-size: 35px;
        line-height: 40px;
    }
`;

export const TextLoop = styled.div`
    color: #F2F3F4;
    display: flex;
    gap: 12px;
    font-size: 32px;
    font-weight: 600;
    line-height: 68px;
    @media (min-width: 1300px) {
        font-size: 34px;
    }
    @media (min-width: 1700px) {
        font-size: 36px;
    }
    @media (max-width: 1000px) {
        text-align: center;
    }
    @media (max-width: 650px) {
        font-size: 22px;
        line-height: 48px;
    }
    @media (max-width: 400px) {
        display: block;
        line-height: 40px;
    }
`;

export const Span = styled.span`
    color: #854CE6;
    cursor: pointer;
`;

export const SubTitle = styled.div`
    color: #F2F3F495;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 32px;
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 650px) {
        margin: 0px 10px 40px 10px;
        font-size: 16px;
        line-height: 28px;
    }
`;

export const ResumeButton = styled.a`
    color: #FFFFFF;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    appearance: button;
    padding: 13px 60px;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634;
        filter: brightness(1);
    }
    @media (min-width: 1300px) {
        font-size: 22px;
    }
    @media (min-width: 1700px) {
        font-size: 24px;
    }
    @media (max-width: 650px) {
        padding: 10px 50px;
        font-size: 18px;
    }
`;

export const RightAbout = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    position: relative;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    border: 2px solid #854CE6;
    @media (min-width: 1700px) {
        height: 400px;
        width: 400px;
    }
    @media (max-width: 1000px) {
        height: 300px;
        width: 300px;
    }
    @media (max-width: 500px) {
        height: 250px;
        width: 250px;
    }
`;