import styled from "styled-components";

export const PreloaderContainer = styled.div`
    position: fixed;
    z-index: 9999;
    height: 100%;
    width: 100%;
    background-color: #1f5066;
    display: flex;
    justify-content: center;
    text-align: center;
    opacity: 1;
    transition: 1s opacity ease-in;
    &.hidden {
        opacity: 0;
    }
`;

export const Image = styled.img``;