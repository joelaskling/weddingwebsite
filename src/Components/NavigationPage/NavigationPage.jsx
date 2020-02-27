import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContent = styled.div`
  text-align: center;
  font-family: "Open Sans";
  margin-top: 90px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-family: "Crimson Text";
  font-size: 20mm;
  color: ${props => props.theme.darkGray};
  margin-bottom: 90px;
  font-weight: normal;
`;

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  color: ${props => props.theme.lightGray};
  font-weight: bold;
  letter-spacing: 0.7mm;
  margin-left: 50px;
  margin-right: 50px;
  text-decoration: none;
  &.active {
    color: ${props => props.theme.selectGray};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.lightGray};
  }

  &:hover {
    color: ${props => props.theme.selectGray};
  }
`;

class NavigationPage extends Component {
  render() {
    return (
      <MainContent>
        <Title className="title">John & Lotta</Title>
        <nav>
          <StyledLink to="/" isActive={checkActive}>
            Home
          </StyledLink>
          <StyledLink to="/wedding">Bröllopet</StyledLink>
          <StyledLink to="/find">Hitta hit</StyledLink>
          <StyledLink to="/info">Info</StyledLink>
        </nav>
      </MainContent>
    );
  }
}

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if (!location) return false;
  const { pathname } = location;
  console.log(pathname);
  return pathname === "/";
};

export default NavigationPage;
