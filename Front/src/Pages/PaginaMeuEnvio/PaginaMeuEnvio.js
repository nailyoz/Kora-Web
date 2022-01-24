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
import  Thumbnail  from "../../Components/Thumbnail/Thumbnail";

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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography variant="h4" style={{ fontWeight: "bold", fontFamily: "Gotham",}}>
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
                  alt="Meu Envio"
                  src={
                    "https://i.ibb.co/YBwqq1y/unnamed.jpg"
                  }
                  width="600px"
                  height="350px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Básico"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                  <Chip
                    label="Funk"
                    style={{ backgroundColor: "#5AB4FF", color: "#fff" }}
                  />
                  <Chip
                    label="May J Lee"
                    style={{ backgroundColor: "#5A58C3", color: "#fff" }}
                  />
                </Stack>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontFamily: "Gotham",
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
                    <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Outfit", }}>
                      Ana Fontes
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                      Ufa! Suei mas consegui! Adorei a coreografia!! Espero pelo
                      feedback!!
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Paper>
            <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Gotham" }}>
              Aprimore o passo:
            </Typography>
            <Paper elevation={4}>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    src={
                      ""
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
                    <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Outfit",  }}>
                      May J Lee
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: "Outfit",  }}>
                      Incrível Ana! Fico feliz que tenha gostado!
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: "Outfit",  }}>
                      Você põe bastante força no movimento peitoral do segundo
                      passo, na verdade o passo é uma ondulação nas costas,
                      assim você não pederia a energia para o terceiro movimento!
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
            <Thumbnail link="https://i.ibb.co/gTqz6Jg/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light-1.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/0fDNxdB/Pretty-woman-practising-hip-hop-dance-in-studio.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/98cyc2t/young-beautiful-girl-dancing-hip-hop-street-style-isolated-studio-155003-13483.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/0fDNxdB/Pretty-woman-practising-hip-hop-dance-in-studio.jpg"></Thumbnail>
          </Stack>
        </Belly>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
