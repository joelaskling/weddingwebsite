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

const WeddingText = styled.p`
  font-size: 4mm;
`;

class WeddingPage extends Component {
  render() {
    return (
      <MainContent>
        <Title>Schema</Title>
        <WeddingText>
          Lorem ipsum dolor sit amet, duo numquam delectus in, atqui audire est
          ex. Ut vim vide posse, quo lorem probatus pericula et. At quot affert
          decore has, mel at mutat clita, case putant posidonium te his. Etiam
          imperdiet intellegam ne pro. Ne ius quas inani imperdiet, diam vide
          libris sea at. Vix nusquam constituto ex, usu in diceret facilisi
          suavitate. Ut posse facer sit, everti prompta periculis in eum, ei
          cibo commune pro. Te inermis adversarium quo, usu ea quem oratio
          persequeris, labores scribentur ut usu. Per idque sonet eleifend te.
          Ut mel etiam fuisset salutatus. Te sumo noluisse vim. Vel eu nulla
          salutandi. Facer salutatus et eos. Vis et inermis disputationi, sit
          legere iriure at. Minim assueverit conclusionemque at nam. Eu facer
          conceptam vim, nobis deterruisset quo id. At ubique fabulas temporibus
          sed, ut unum luptatum deserunt sea, cibo utinam eam ne. Esse mazim qui
          at. Vix ea altera fuisset adipisci, modus erroribus eu usu. Id euismod
          gubergren quo, eu eos debet vocent iudicabit. Delenit ceteros
          efficiendi ne est, solet tamquam patrioque quo cu, eum eu inimicus
          definitiones. Modus nonumes mea id, solet integre senserit te vix. In
          iudico ignota detracto sed, at vim mentitum conceptam. Populo
          postulant maluisset pri ea.
        </WeddingText>
      </MainContent>
    );
  }
}

export default WeddingPage;
