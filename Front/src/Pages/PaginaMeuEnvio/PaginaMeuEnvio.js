import React from "react";
import {
  Avatar,
  styled,
  Typography,
  Card,
  Chip,
  CardContent,
  Stack,
  Paper,
} from "@mui/material";
import { Menu } from "../../Components/Menu/Menu";
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
  padding: theme.spacing(2),
}));

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const Spine = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

const Belly = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: "#FBF4F4",
}));

const Box = styled("div")(({ theme }) => ({
  padding: theme.spacing(10),
}));

export function PaginaMeuEnvio() {
  return (
    <Root>
      <Menu></Menu>
      <Header>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Meu Envio
        </Typography>
      </Header>
      <Body>
        <Spine>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "24px",
            }}
          >
            <Card>
              <CardContent>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="600px"
                  height="350px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Nível Básico"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                  <Chip
                    label="Ritmo"
                    style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                  />
                  <Chip
                    label="Professor"
                    style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                  />
                </Stack>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Abusadamente (Remix) MC Gustta e MC DG | Coreografia por:
                    May J Lee
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
          <Stack direction="column" spacing={2}>
            <Paper elevation={4}>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    src={
                      "https://ichef.bbci.co.uk/news/640/cpsprodpb/121F5/production/_116092247_foto_01.jpg"
                    }
                    sx={{ width: 70, height: 70 }}
                  ></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: "24px",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      Ana Fontes
                    </Typography>
                    <Typography variant="h6">
                      Ufa! Suei mas consegui! Adorei a coreografia!! Espero pelo
                      feedback!!
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Paper>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Aprimore o passo:
            </Typography>
            <Paper elevation={4}>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    src={
                      "https://ichef.bbci.co.uk/news/640/cpsprodpb/121F5/production/_116092247_foto_01.jpg"
                    }
                    sx={{ width: 70, height: 70 }}
                  ></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: "24px",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      May J Lee
                    </Typography>
                    <Typography variant="h6">
                      Incrível Ana! Fico feliz que tenha gostado!
                    </Typography>
                    <Typography variant="h6">
                      Você põe bastante força no movimento peitoral do segundo
                      passo, na verdade o passo é uma ondulação nas costas,
                      assim você pederia a energia para o terceiro movimento!
                      Obrigada!!
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Paper>
          </Stack>
        </Spine>
        <Box></Box>
        <Belly>
          <Stack direction="column" spacing={2}>
            <Card>
              <CardContent>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Nível Básico"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                  <Chip
                    label="Ritmo"
                    style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                  />
                  <Chip
                    label="Professor"
                    style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                  />
                </Stack>
                <Typography variant="h6" style={{ paddingTop: "4px" }}>
                  Música | Coreográfo/Professor
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Nível Básico"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                  <Chip
                    label="Ritmo"
                    style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                  />
                  <Chip
                    label="Professor"
                    style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                  />
                </Stack>
                <Typography variant="h6" style={{ paddingTop: "4px" }}>
                  Música | Coreográfo/Professor
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Nível Básico"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                  <Chip
                    label="Ritmo"
                    style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                  />
                  <Chip
                    label="Professor"
                    style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                  />
                </Stack>
                <Typography variant="h6" style={{ paddingTop: "4px" }}>
                  Música | Coreográfo/Professor
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Nível Básico"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                  <Chip
                    label="Ritmo"
                    style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                  />
                  <Chip
                    label="Professor"
                    style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                  />
                </Stack>
                <Typography variant="h6" style={{ paddingTop: "4px" }}>
                  Música | Coreográfo/Professor
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Belly>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
