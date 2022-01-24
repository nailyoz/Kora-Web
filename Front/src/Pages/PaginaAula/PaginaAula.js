import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import {
  styled,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Paper,
  Avatar,
} from "@mui/material";
import { Rodape } from "../../Components/Rodape/Rodape";
import { Star, ShoppingBasket, Reply } from "@mui/icons-material";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";


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

export function PaginaAula() {
  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography variant="h4" style={{ fontWeight: "bold", fontFamily: "Gotham", }}>
          Aula
        </Typography>
      </Header>
      <Body>
        <Spine>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px",
                  }}
                >
                  <img
                    alt="Fundo Colorido"
                    src={
                      "https://i.ibb.co/Jqmpk4Y/Beautiful-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-gradient-background-at-dance.jpg"
                    }
                    width="600px"
                    height="350px"
                  ></img>
                  <div style={{ marginLeft: "16px" }}>
                    <Stack direction="column" spacing={2}>
                      <Card>
                        <CardContent>
                          <Star />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent>
                          <ShoppingBasket />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent>
                          <Reply />
                        </CardContent>
                      </Card>
                    </Stack>
                  </div>
                </div>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Intermediário"
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
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontFamily: "Gotham",
                    }}
                  >
                    Abusadamente (Remix) - MC Gustta e MC DG | Coreografia por:
                    May J Lee
                  </Typography>
                  <Stack direction="column" spacing={3}>
                    <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                      May J Lee, coreografa desde 2013, com movimentos
                      impactantes e divertidos, ela traz nessa aula de nível
                      avançado uma coreografia exclusiva Kora!
                    </Typography>
                    <Stack direction="column" spacing={1}>
                      <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Gotham", }}>
                        Requisitos:
                      </Typography>
                      <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                        {" "}
                        Estar no nível Intermediário
                      </Typography>
                    </Stack>
                    <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Gotham", }}>
                      Comentários:
                    </Typography>
                    <Stack direction="column" spacinh={1}>
                      <Paper elevation={4}>
                        <CardContent>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
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
                              <Typography
                                variant="h6"
                                style={{ fontWeight: "bold", fontFamily: "Gotham", }}
                              >
                                Ana Fontes
                              </Typography>
                              <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                                Muito bom! Sinto que realmente avancei minhas
                                habilidades!!!
                              </Typography>
                            </div>
                          </div>
                        </CardContent>
                      </Paper>
                    </Stack>
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </div>
        </Spine>
        <Box></Box>
        <Belly>
        <Typography
           variant="h6"
           style={{fontFamily: "Gotham", }}>
            Recomendados
         </Typography>
          <Stack direction="column" spacing={2}>
            <Thumbnail link="https://i.ibb.co/gTqz6Jg/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light-1.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/0fDNxdB/Pretty-woman-practising-hip-hop-dance-in-studio.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/98cyc2t/young-beautiful-girl-dancing-hip-hop-street-style-isolated-studio-155003-13483.jpg"></Thumbnail>
          </Stack>
        </Belly>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
