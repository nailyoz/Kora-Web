import React from "react";
import { styled, Typography, Box, Button } from "@mui/material";
import { RoundedChip } from "../../Components/RoundedChip";
import { Rodape } from "../../../src/Components/Rodape/Rodape";

const Header = styled("div")(({ theme }) => ({
  width: "100%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: "#5A0089FF",
  paddingRight: "40px",
  paddingLeft: "40px",
}));

const CustomButtom = styled("Buttom")(() => ({
  backgroundColor: "#5AB4FF",
  fontSize: 16,
  color: "white",
  padding: "6px 20px",
  borderRadius: "20px",
}));

const CustomBoxPurple = styled("div")(() => ({
  height: "30px",
  width: "500px",
  backgroundColor: "#5A0089FF",
}));

// Imagem da bailarina
const CustomImageBackground = styled("img")(() => ({
  width: "100%",
  height: "550px",
  backgroundColor: "#5AB4FF",
  alignItems: "flex-end",
}));

// Imagem 530 x 350
const CustomSubImage = styled("img")(() => ({
  width: "530px",
  height: "350px",
  backgroundColor: "#5A0089",
}));

// Image 530 x 590
const CustomBigImage = styled("img")(() => ({
  width: "530px",
  height: "590px",
  backgroundColor: "#FFA500",
}));

const CustomContainer = styled("div")(() => ({
  width: "100%",
  height: "600px",
  display: "flex",
  paddingRight: "90px",
  paddingLeft: "90px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export function PaginaBemVindo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header>
        <CustomButtom>Login</CustomButtom>
      </Header>
      <CustomImageBackground></CustomImageBackground>
      <CustomContainer>
        <CustomSubImage></CustomSubImage>
        <Box
          sx={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "space-between",
          }}
        >
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
            online, nos dedicamos a te guiar e aprimorar suas técnicas de dança,
            quando você quiser e no conforto da sua casa! Com um serviço amplo e
            exclusivo, realizaremos juntos a sua transformação em um excelente
            dançarino!
          </Typography>
          <CustomBoxPurple></CustomBoxPurple>
        </Box>
      </CustomContainer>
      <CustomContainer>
        <CustomBigImage></CustomBigImage>
        <Box
          sx={{
            width: "500px",
            height: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomSubImage></CustomSubImage>
          <Typography variant="h6" gutterBottom sx={{ marginBottom: "100px" }}>
            Aqui o mundo da dança se transforma e te traz junto com ele, faça
            parte dessa família!
          </Typography>
          <Box
            sx={{
              width: "500px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#5A0089FF",
                width: "50px",
                height: "80px",
              }}
            ></div>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                paddingLeft: "20px",
              }}
            >
              {" "}
              Tudo no seu ritmo!
            </Typography>
          </Box>
        </Box>
      </CustomContainer>
      <div
        style={{
          width: "100%",
          height: "860px",
          marginTop: "100px",
          backgroundColor: "#F8EAFF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <RoundedChip text={"Profissionais Especializados"} />
          <RoundedChip text={"Música e Danças Populares"} />
          <RoundedChip text={"Preços Acessíveis"} />
          <RoundedChip text={"Vários Ritmo"} />
          <RoundedChip text={"Conteúdos Exclusivos"} />
          <RoundedChip text={"Comunicação e Suporte"} />
        </Box>
      </div>
      <div
        style={{
          width: "100%",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </div>
      <Rodape></Rodape>
    </div>
  );
}
