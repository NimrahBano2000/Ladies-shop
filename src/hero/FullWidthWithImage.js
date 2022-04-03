import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import facebookicon from "images/facebook-icon.svg";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
} from "reactstrap";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-blue-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-gradient-to-t h-screen min-h-screen`}
  background-image: url("https://i.pinimg.com/originals/35/b9/50/35b950f08e792839d1c781f163193935.png");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-blue-500 text-gray-100 hocus:bg-blue-700 hocus:text-gray-200 focus:outline-none focus:ring`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/categories">Categories</NavLink>
      <NavLink href="/aboutus">AboutUs</NavLink>
      <NavLink href="/contactus">ContactUs</NavLink>
      <NavLink href="/Cart">Cart</NavLink>
      <NavLink href="/wishlist">Wishlist</NavLink>
      
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/login">
        Login
      </PrimaryLink>
    </NavLinks>,
    <NavLinks>
        <UncontrolledDropdown >
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                <PrimaryLink href="/myorder">
                    My Profile
                </PrimaryLink>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem  >
                  <NavLink className="text-dark" href="/myorders">My Order</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="text-dark" href="/logout">Logout</NavLink>
                </DropdownItem>
                <DropdownItem  >
                  <NavLink className="text-dark" href="/myorders">Edit Profile</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
          Find Latest Fashion
              <br />
              whatever you want.
          </Heading>
          <h2>We provide you the classy look with most comfortable dresses</h2>
        </Content>
      </HeroContainer>
    </Container>
  );
};
