import React from "react";
import { styled, Typography, Button, Stack, Paper } from "@mui/material";
import { RoundedChip } from "../../Components/RoundedChip";
import { Rodape } from "../../Components/Rodape/Rodape";
import marca from "../../shared/img/marca.png";
//import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const Header = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#5A0089FF",
  paddingRight: "40px",
  paddingLeft: "40px",
}));

const Neck = styled("div")(() => ({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Belly = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "100px",
}));

const Feet = styled("div")(() => ({
  width: "100%",
  height: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CustomButtom = styled("div")(() => ({
  backgroundColor: "#5AB4FF",
  fontSize: 16,
  color: "white",
  padding: "6px 20px",
  borderRadius: "20px",
}));

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gridRowGap: "100px",
  gridColumnGap: "100px",
  gridTemplateColumns: "auto 400px 400px auto",
  gridTemplateRows: "400px 500px",
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));




export function PaginaBemVindo() {
  return (
    <Root>
      <Header>
        <img alt="Kora-mark" src={marca} height="60px"></img>
        <CustomButtom>Login</CustomButtom>
      </Header>     
      <Neck>
      <img
            alt="Dançarina de ballet no ar"
            src={"https://i.ibb.co/K7kgrdk/High-above-Young-and-graceful-ballet-dancer-on-pink-studio-background-in-neon-light-Art-motion-actio.jpg"}
            height="450px"
            width="100%"
            
        ></img>
         <Button
            size="large"
            sx={{
              backgroundColor: "white",
              color: "#5A0089FF",
              width: "250px",
              height: "50px",
              borderRadius: "25px",
              position: "absolute",
              bottom: "0",
              margin: "10px",
            }}
          >
            Junte-se ao Kora!
          </Button>
      </Neck>
      <Body>
        <Container>
          <img
            style={{
              gridRow: "1 / 3",
              gridColumn: "2 / 3",
              height: "400px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="Imagem de dança"
            src={"https://i.ibb.co/B2xWv28/Dance-time-Stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall.jpg"}
            
          ></img>
            <div style={{
            gridRow: "1 / 2",
            gridColumn: "3 / 4",
            position: "relative",
            }}>
              <Typography
                variant="h3"
                component="div"
                gutterBottom
                style={{ fontSize: "3rem", fontWeight: "bold", fontFamily:"Gotham, Outfit", }}
                >
                Bem-vindo ao KORA
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: "50px", fontSize:"16px", fontFamily:"Outfit"}}>
                Somos a maior plataforma online especializada em dança. Nascida
                online, nos dedicamos a te guiar e aprimorar suas técnicas de
                dança, quando você quiser e no conforto da sua casa! Com um
                serviço amplo e exclusivo, realizaremos juntos a sua transformação
                em um excelente dançarino!
              </Typography>
              <div
              style={{
                height: "60px",
                width: "100%",
                backgroundColor: "#5A0089FF",
                position: "absolute",
                bottom: "0",
              }}
              ></div>
            </div>

            <img
              style={{
              gridRow: "2 / 3",
              gridColumn: "2 / 3",
              height: "500px",
              width: "100%",
              objectFit: "cover",
              }}
            alt="Imagem de dança"
            src={"https://i.ibb.co/L6GXQPZ/Young-beautiful-man-and-woman-dancing-hip-hop-street-style-isolated-on-studio-background-in-colorful.jpg"}
          ></img>

           <div style={{
            gridRow: "2 / 3",
            gridColumn: "3 / 4",
            position: "relative",
            }}>
                <img
                style={{
                height: "300px",
                width: "100%",
                objectFit: "cover",
                marginBottom: "50px",
                }}
                alt="Imagem de dança"
                src={"https://i.ibb.co/GC15Jg1/Beautiful-sportive-girls-dancing-hip-hop-in-stylish-clothes-on-colorful-gradient-studio-background-i.jpg"}
              ></img>
              <Typography variant="h5" sx={{ fontSize:"16px", fontFamily:"Outfit"}}>
                Aqui o mundo de dança se transforma e te traz junto com ele, faça
                parte dessa família!
              </Typography>
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
                bottom: "0",
              }}
            >
              <div
                style={{
                  backgroundColor: "#5A0089FF",
                  width: "30px",
                  height: "50px",
                }}
              ></div>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                style={{ fontWeight: "bold", marginLeft: "16px", fontFamily:"Gotham", }}
              >
                Tudo em seu Ritmo 
              </Typography>
            </div>
            </div>
            
        </Container>


        <Belly>
          <Stack spacing={8} direction="row">
            <Item>
              <RoundedChip
                text={"Profissionais Especializados"}
                imgSource={
                  "https://i.ibb.co/gTqz6Jg/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light-1.jpg"
                }
              />

              <RoundedChip
                text={"Música e Danças Populares"}
                imgSource={
                  "https://i.ibb.co/MfMXqXh/young-beautiful-man-dancing-hip-hop-street-style-isolated-studio-155003-13481.jpg"
                }
              />
            </Item>
            <Item>
              <RoundedChip
                text={"Preços Acessiveis"}
                imgSource={
                  "https://i.ibb.co/s39B63G/The-young-handsome-happy-hipster-man-listening-music-with-headphones-at-black-studio-with-neon-light.jpg"
                }
              />

              <RoundedChip
                text={"Vários Ritmos"}
                imgSource={
                  "https://i.ibb.co/Jqmpk4Y/Beautiful-sportive-girl-dancing-hip-hop-in-stylish-clothes-on-colorful-gradient-background-at-dance.jpg"
                }
              />
            </Item>
            <Item>
              <RoundedChip
                text={"Conteúdo Exclusivo"}
                imgSource={
                  "https://i.ibb.co/ygD55sk/boy-girl-dancing-hip-hop-stylish-clothes-gradient-background-dance-hall-neon-light-155003-9254.jpg"
                }
              />

              <RoundedChip
                text={"Comunicação e Suporte"}
                imgSource={
                  "https://i.ibb.co/R4DCsWJ/Design-sem-nome.png"
                }
              />
            </Item>
          </Stack>
        </Belly>

        <Feet>
          <Button
            size="large"
            sx={{
              backgroundColor: "#5A0089FF",
              color: "white",
              width: "250px",
              height: "50px",
              borderRadius: "25px",
            }}
          >
            Junte-se ao Kora!
          </Button>
        </Feet>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
