import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
    background-color: #191924;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 10;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 50px;
    z-index: 1;
    @media (max-width: 650px) {
        padding: 0px 20px;
    }
    @media (max-width: 400px) {
        padding: 0px 10px;
    }
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Span = styled.div`
    padding: 0 4px;
    font-size: 18px;
    font-weight: bold;
    @media (min-width: 1300px) {
        font-size: 23px;
    }
    @media (min-width: 1700px) {
        font-size: 25px;
    }
`;

export const NavItems = styled.ul`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 20px;
    list-style: none;
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: #F2F3F4;
    padding: 5px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #854CE6;
    }
    @media (min-width: 1300px) {
        font-size: 18px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
`;

export const GitHubButton = styled.a`
    color: #854CE6;
    padding: 8px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.8px solid #854CE6;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #FFFFFF;   
        background-color: #854CE6;
    }
    @media (min-width: 1300px) {
        font-size: 18px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`;




export const MenuIcon = styled.div`
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    z-index: 99;
    &:hover {
        filter: brightness(0.8);
    }
    @media (min-width: 1001px) {
        display: none;
    }
`;

export const MobileNavItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    list-style: none;
    height: 100vh;
    width: 180px;
    background-color: rgb(3 27 52 / 1);
    position: fixed;
    top: 0px;
    right: 0px;
    padding: 25px 10px;
    @media (min-width: 1001px) {
        display: none;
    }
    @media (min-width: 500px) {
        width: 40%;
    }
`;

export const MobileNavLink = styled.a`
    color: rgba(255, 255, 255, 0.7);
    margin: 0px 15px;
    padding: 5px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #ffffff;
    }
`;