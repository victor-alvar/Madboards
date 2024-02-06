import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  //Handles the scroll to each section

  useEffect(() => {
    // remove scroll when mobile menu is open
    if (click === true) {
      document.querySelector("html").classList.add("mobile_nav_open");
    } else {
      document.querySelector("html").classList.remove("mobile_nav_open");
    }
  }, [click]);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navbar">
      <Nav>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <ListItem onClick={() => scrollTo("home")}>Home</ListItem>
          <ListItem onClick={() => scrollTo("about")}>About</ListItem>
          <ListItem onClick={() => scrollTo("roadmap")}>Roadmap</ListItem>
          <ListItem onClick={() => scrollTo("showcase")}>Showcase</ListItem>
          <ListItem onClick={() => scrollTo("team")}>Team</ListItem>
          <ListItem onClick={() => scrollTo("faqs")}>Faq</ListItem>
          <ListItem>
            <div className="mobile">
              <Button text="View on OpenSea" link="https://opensea.io" />
            </div>
          </ListItem>
        </Menu>
        <div className="desktop">
          <Button text="View on OpenSea" link="https://opensea.io/" />
        </div>
      </Nav>
    </Section>
  );
};

const HamburgerMenu = styled.div`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.text};
  position: absolute;
  right: 0.9rem;
  top: 2.6rem;
  transform: ${(props) =>
    props.click
      ? `translateX(-50%) rotate(45deg)`
      : `translateX(-50%) rotate(0)`};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;
  z-index: 999;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  }

  &::before,
  &::after {
    content: "";
    width: ${(props) => (props.click ? "2rem" : "1.5rem")};
    height: 2px;
    right: 0;
    background-color: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(-90deg)` : `rotate(0)`)};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(90deg)` : `rotate(0)`)};
  }
`;

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }

    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(2px);
    transform: ${(props) =>
      props.click ? `translateY(0)` : `translateY(1000%)`};
    transition: all 0.3s ease;
    touch-action: none;
  }
`;

const ListItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;
export default Navbar;
