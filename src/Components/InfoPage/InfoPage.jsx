import React, { Component } from "react";
import styled from "styled-components";

const MainContent = styled.div`
  text-align: center;
  font-family: "Open Sans";
  margin-top: 90px;
  margin-bottom: 150px;
  display: block;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 8mm;
  color: ${props => props.theme.lightGray};
`;

const InfoText = styled.p`
  font-size: 4mm;
`;

class InfoPage extends Component {
  render() {
    return (
      <MainContent>
        <Title>Information</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, duo numquam delectus in, atqui audire est
          ex. Ut vim vide posse, quo lorem probatus pericula et. At quot affert
          decore has, mel at mutat clita, case putant posidonium te his. Etiam
          imperdiet intellegam ne pro. Ne ius quas inani imperdiet, diam vide
          libris sea at. Vix nusquam constituto ex, usu in diceret facilisi
          suavitate. Ut posse facer sit, everti prompta periculis in eum, ei
          cibo commune pro. Te inermis adversarium quo, usu ea quem oratio
          persequeris, labores scribentur ut usu. Per idque sonet eleifend te.
        </InfoText>
        <Title>Allergier</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, duo numquam delectus in, atqui audire est
          ex. Ut vim vide posse, quo lorem probatus pericula et. At quot affert
          decore has, mel at mutat clita, case putant posidonium te his. Etiam
          imperdiet intellegam ne pro. Ne ius quas inani imperdiet, diam vide
          libris sea at. Vix nusquam constituto ex, usu in diceret facilisi
          suavitate. Ut posse facer sit, everti prompta periculis in eum, ei
          cibo commune pro. Te inermis adversarium quo, usu ea quem oratio
          persequeris, labores scribentur ut usu. Per idque sonet eleifend te.
        </InfoText>
        <Title>Kontakt</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, duo numquam delectus in, atqui audire est
          ex. Ut vim vide posse, quo lorem probatus pericula et. At quot affert
          decore has, mel at mutat clita, case putant posidonium te his. Etiam
          imperdiet intellegam ne pro.
        </InfoText>
      </MainContent>
    );
  }
}

export default InfoPage;
