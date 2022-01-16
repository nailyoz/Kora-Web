import React from "react";
import { styled, Typography, Button, Stack, Paper } from "@mui/material";
import { RoundedChip } from "../../Components/RoundedChip";
import { Rodape } from "../../Components/Rodape/Rodape";
import marca from "../../shared/img/marca.png";

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
  marginTop: "48px",
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

const RightDivWelcome = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "500px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: theme.spacing(3),
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: theme.spacing(5),
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  marginTop: theme.spacing(3),
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export function PaginaBemVindo() {
  return (
    <Root>
      <Header>
        <img alt="Kora-mark" src={marca} width="125px" height="45px"></img>
        <CustomButtom>Login</CustomButtom>
      </Header>
      <Neck>
        <img
          alt="Dançarino"
          src={"https://images4.alphacoders.com/772/thumb-1920-77238.jpg"}
          width="100%"
          height="600px"
        ></img>
      </Neck>
      <Body>
        <Container>
          <img
            alt="Fundo Colorido 600x400"
            src={"https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"}
            height="400px"
            width="400px"
          ></img>
          <RightDivWelcome>
            <Typography
              variant="h3"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Bem-vindo ao KORA
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ marginBottom: "50px" }}>
              Somos a maior plataforma online especializada em dança. Nascida
              online, nos dedicamos a te guiar e aprimorar suas técnicas de
              dança, quando você quiser e no conforto da sua casa! Com um
              serviço amplo e exclusivo, realizaremos juntos a sua transformação
              em um excelente dançarino!
            </Typography>
            <div
              style={{
                height: "20px",
                width: "500px",
                backgroundColor: "#5A0089FF",
              }}
            ></div>
          </RightDivWelcome>
        </Container>

        <Container>
          <img
            alt="Fundo Colorido 600x400"
            src={"https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"}
            height="400px"
            width="400px"
          ></img>
          <RightDivWelcome>
            <img
              alt="Fundo Colorido 600x400"
              src={"https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"}
              height="200px"
              width="400px"
            ></img>
            <Typography variant="h5">
              Aqui o mundo de dança se transforma e te traz junto com ele, faça
              parte dessa família!
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "48px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  width: "50px",
                  height: "50px",
                }}
              ></div>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                style={{ fontWeight: "bold", marginLeft: "16px" }}
              >
                Tudo em seu Ritmo
              </Typography>
            </div>
          </RightDivWelcome>
        </Container>

        <Belly>
          <Stack spacing={8} direction="row">
            <Item>
              <RoundedChip
                text={"Profissionais Especializados"}
                imgSource={
                  "https://geekantenado.com/wp-content/uploads/2021/11/250606478_1526802584344940_5878633640115131255_n.jpg"
                }
              />

              <RoundedChip
                text={"Música e Danças Populares"}
                imgSource={
                  "https://geekantenado.com/wp-content/uploads/2021/11/250721574_258251386264545_9205736197552251609_n.jpg"
                }
              />
            </Item>
            <Item>
              <RoundedChip
                text={"Profissionais Especializados"}
                imgSource={
                  "https://geekantenado.com/wp-content/uploads/2021/11/250606478_1526802584344940_5878633640115131255_n.jpg"
                }
              />

              <RoundedChip
                text={"Música e Danças Populares"}
                imgSource={
                  "https://geekantenado.com/wp-content/uploads/2021/11/250721574_258251386264545_9205736197552251609_n.jpg"
                }
              />
            </Item>
            <Item>
              <RoundedChip
                text={"Profissionais Especializados"}
                imgSource={
                  "https://geekantenado.com/wp-content/uploads/2021/11/250606478_1526802584344940_5878633640115131255_n.jpg"
                }
              />

              <RoundedChip
                text={"Música e Danças Populares"}
                imgSource={
                  "https://geekantenado.com/wp-content/uploads/2021/11/250721574_258251386264545_9205736197552251609_n.jpg"
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
