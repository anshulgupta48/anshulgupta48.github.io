import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 100px 0px;
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 96%, 0 100%);
    position: relative;
    scroll-margin-top: 80px;
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

export const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    margin-top: 28px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: #171721;
    border-radius: 16px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    @media (max-width: 500px) {
        width: 90%;
    }
`;

export const ContactTitle = styled.div`
    color: #F2F3F4;
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: 600;
    @media (min-width: 1300px) {
        font-size: 27px;
    }
    @media (min-width: 1700px) {
        font-size: 30px;
    }
`;

export const ContactInput = styled.input`
    flex: 1;
    padding: 12px 16px;
    color: #F2F3F4;
    background-color: transparent;
    border: 1px solid #B1B2B3;
    border-radius: 12px;
    font-size: 18px;
    outline: none;
    &:focus {
        border: 1px solid #854CE6;
    }
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
`;

export const ContactInputMessage = styled.textarea`
    flex: 1;
    padding: 12px 16px;
    color: #F2F3F4;
    background-color: transparent;
    border: 1px solid #B1B2B3;
    border-radius: 12px;
    font-size: 18px;
    outline: none;
    &:focus {
        border: 1px solid #854CE6;
    }
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
`;

export const ContactButton = styled.input`
    width: 100%;
    margin-top: 2px;
    padding: 13px 16px;
    color: #F2F3F4;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
    }
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
`;