import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../assets/img/madboards-logo.png";

const Logo = () => {
  return (
    <LogoWrap>
      <Link to="/">
        <img src={image} alt="Madboards logo" className="img" />
      </Link>
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  height: auto;
  width: 230px;
  display: block;
  transition: all 0.2s ease;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  .img {
    width: 100%;
    object-fit: cover;
  }
`;
export default Logo;
