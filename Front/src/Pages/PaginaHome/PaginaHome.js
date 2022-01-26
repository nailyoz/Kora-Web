import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import { styled, Typography, Paper, Button } from "@mui/material";
import RowThumbnail from "../../Components/Thumbnail/RowThumbnail";
import Collection from "../../Components/Thumbnail/Collection";
import { Rodape } from "../../Components/Rodape/Rodape";

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

const Feet = styled("div")(() => ({
  width: "100%",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "25px",
  boxShadow: theme.shadows[2],
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export function PaginaHome() {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", fontFamily: "Gotham" }}
        >
          Home
        </Typography>
      </Header>
      <Body>
        <RowThumbnail titulo="Continue Assistindo:"></RowThumbnail>
        <RowThumbnail titulo="Recomendamos Para Você:"></RowThumbnail>
        <Collection titulo="Meus Envios"></Collection>
        <RowThumbnail titulo="Aulas Concluídas"></RowThumbnail>
        <Collection titulo="Você Segue:"></Collection>

        <Feet>
          <CustomButton onClick={topFunction}>
            <Typography style={{ color: "#5A0089FF" }}>
              Voltar ao Topo
            </Typography>
          </CustomButton>
        </Feet>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
