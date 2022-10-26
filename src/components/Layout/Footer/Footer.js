import { FooterStyled,FooterContainer,IconsContainer } from "../../styles/footer/Footer.styled";
import { FaFacebook,FaTwitter,FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
    <FooterStyled>
      <h2>&copy; 2022 Base USA. All rights reserved.</h2>
      <IconsContainer>
        <FaFacebook className="icon"/>
        <FaTwitter className="icon"/>
        <FaEnvelope className="icon"/>
      </IconsContainer>
    </FooterStyled>
    </FooterContainer>
  );
};

export default Footer;
