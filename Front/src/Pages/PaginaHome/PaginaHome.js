import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import {
  styled,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Chip,
  Paper,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const SubContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const CustomButtom = styled(Button)(({ theme }) => ({
  backgroundColor: "#E9C8FA",
  margin: theme.spacing(2),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  borderRadius: theme.spacing(5),
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

export function PaginaHome() {
  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Home
        </Typography>
      </Header>
      <Body>
        <Container>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Continue!
          </Typography>
          <SubContainer>
            <CustomButtom>
              <ChevronLeft style={{ color: "#000" }} />
            </CustomButtom>
            <Stack direction="row" spacing={2}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
            <CustomButtom>
              <ChevronRight style={{ color: "#000" }} />
            </CustomButtom>
          </SubContainer>
        </Container>
        <Container>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Recomendamos para você!
          </Typography>
          <SubContainer>
            <CustomButtom>
              <ChevronLeft style={{ color: "#000" }} />
            </CustomButtom>
            <Stack direction="row" spacing={2}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
            <CustomButtom>
              <ChevronRight style={{ color: "#000" }} />
            </CustomButtom>
          </SubContainer>
        </Container>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Meus envios
            </Typography>
          </div>
          <CardContent>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
              </Stack>
              <Stack direction="row" spacing={2}>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
              </Stack>
            </Stack>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <CustomPaper>
                <Typography style={{ color: "#5A0089FF", fontWeight: "bold" }}>
                  Ver Mais
                </Typography>
              </CustomPaper>
            </div>
          </CardContent>
        </Card>
        <Container style={{ marginTop: "16px" }}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Recomendamos para você!
          </Typography>
          <SubContainer>
            <CustomButtom>
              <ChevronLeft style={{ color: "#000" }} />
            </CustomButtom>
            <Stack direction="row" spacing={2}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontStyle: "italic",
                    }}
                  >
                    Mais Vista
                  </Typography>
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
            <CustomButtom>
              <ChevronRight style={{ color: "#000" }} />
            </CustomButtom>
          </SubContainer>
        </Container>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Meus envios
            </Typography>
          </div>
          <CardContent>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
              </Stack>
              <Stack direction="row" spacing={2}>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
                <img
                  alt="Fundo Colorido"
                  src={
                    "https://s1.1zoom.me/prev/582/Texture_581784_600x400.jpg"
                  }
                  width="300px"
                  height="150px"
                ></img>
              </Stack>
            </Stack>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <CustomPaper>
                <Typography style={{ color: "#5A0089FF", fontWeight: "bold" }}>
                  Ver Mais
                </Typography>
              </CustomPaper>
            </div>
          </CardContent>
        </Card>

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
