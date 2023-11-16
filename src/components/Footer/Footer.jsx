import React from 'react';
import { FooterContainer, Logo, SocialMediaIcon, SocialMediaIcons, Copyright } from './FooterStyleComponents';
import { Bio } from '../../constants';
import { SiLeetcode, SiGeeksforgeeks, SiLinkedin, SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si';
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer id='footer'>
      <Logo>Anshul Gupta</Logo>

      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.leetcode} target="display"><SiLeetcode /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.geeksforgeeks} target="display" style={{ fontSize: "22px" }}><SiGeeksforgeeks /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.linkedin} target="display"><SiLinkedin /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.github} target="display"><SiGithub /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.instagram} target="display"><SiInstagram /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.whatsapp} target="display"><SiWhatsapp /></SocialMediaIcon>
      </SocialMediaIcons>

      <Copyright>Copyright &copy; {currentYear} Anshul Gupta | All Rights Reserved</Copyright>
    </FooterContainer>
  )
}

export default Footer;