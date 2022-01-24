import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import {
  styled,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import { Rodape } from "../../Components/Rodape/Rodape";
import RowThumbnail from "../../Components/Thumbnail/RowThumbnail";

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F8EAFF",
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

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "25px",
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export function PaginaDescobrir() {
  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography variant="h4" style={{ fontWeight: "bold", fontFamily:"Gotham", }}>
          Descobrir
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "24px" }}
        >
          <Card>
            <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  marginBottom: "18px",
                  fontStyle: "italic",
                  fontFamily:"Outfit",
                }}
              >
                Mais Vista
              </Typography>
              <img
                alt="Thumbnail"
                src={"https://i.ibb.co/gTqz6Jg/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light-1.jpg"}
                width="400px"
                height="200px"
                style={{objectFit: "cover",}}
              ></img>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Intermediário"
                  style={{ backgroundColor: "#5A0089", color: "#fff" }}
                />
                <Chip
                  label="K-pop"
                  style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                />
                <Chip
                  label="Julia Neves"
                  style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                />
              </Stack>
              <Typography variant="h6" style={{ paddingTop: "4px", fontFamily: "Outfit", fontWeight: "bold", }}>
                Savage - AESPA  | Ensinado por Julia Neves
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
          <div style={{ marginLeft: "35px", marginRight: "35px" }}></div>
          <Card style={{ alignItems: "center" }}>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  marginBottom: "18px",
                  fontStyle: "italic",
                  fontFamily: "Outfit",
                }}
              >
                Novidade
              </Typography>
              <img
                alt="Thumbnail"
                src={"https://i.ibb.co/MfMXqXh/young-beautiful-man-dancing-hip-hop-street-style-isolated-studio-155003-13481.jpg"}
                width="400px"
                height="200px"
                style={{objectFit: "cover",}}
              ></img>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Básico"
                  style={{ backgroundColor: "#5A0089", color: "#fff" }}
                />
                <Chip
                  label="Hip-hop"
                  style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                />
                <Chip
                  label="João Luís"
                  style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                />
              </Stack>
              <Typography variant="h6" style={{ paddingTop: "4px", fontFamily: "Outfit", fontWeight: "bold", fontSize: "18px"}}>
                  Windows - Kamaiyah  | Coreografia por João Luís
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Header>
      <Body>
        <RowThumbnail titulo="Descubra: As Mais Vistas"></RowThumbnail>
        <RowThumbnail titulo="Descubra: Novos Ritmos"></RowThumbnail>
        <RowThumbnail titulo="Descubra: Novos Professores"></RowThumbnail>
        <RowThumbnail titulo="Subindo de nível!"></RowThumbnail>

        <Feet>
          <CustomPaper>
            <Typography style={{ color: "#5A0089FF", fontWeight: "bold" }}>
              Voltar ao Topo
            </Typography>
          </CustomPaper>
        </Feet>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
