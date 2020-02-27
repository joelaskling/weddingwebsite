import React, { Component } from "react";
import styled from "styled-components";

const FrontImage = styled.img`
  display: block;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.7;
`;

class LandingPage extends Component {
  render() {
    return (
      <div>
        <FrontImage src={require("./hulta.jpg")} />
      </div>
    );
  }
}

export default LandingPage;
