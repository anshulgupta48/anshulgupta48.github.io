import styled from "styled-components";

export const FooterContainer = styled.div`
    color: #F2F3F4;
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const Logo = styled.h1`
    color: #854CE6;
    font-weight: 600;
    font-size: 20px;
    @media (min-width: 1300px) {
        font-size: 22px;
    }
    @media (min-width: 1700px) {
        font-size: 25px;
    }
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 1300px) {
        margin: 5px 0px;
    }
    @media (min-width: 1700px) {
        margin: 10px 0px;
    }
`;

export const SocialMediaIcon = styled.a`
    display: inline-block;
    color: #F2F3F4;
    margin: 0px 12px;
    font-size: 18px;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: #854CE6;
    }
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
`;

export const Copyright = styled.p`
    margin: 0px 10px;
    margin-bottom: 5px;
    font-size: 15px;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 17px;
    }
    @media (min-width: 1700px) {
        font-size: 20px;
    }
`;