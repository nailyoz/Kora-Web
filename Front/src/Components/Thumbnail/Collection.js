import React from "react";
import {
  Typography,
  Card,
  CardContent,
  styled,
  Stack,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

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

export default function Collection(titulo) {
  return (
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
          {titulo.titulo}
        </Typography>
      </div>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Link to="/meuenvio">
              <img
                alt="Fundo Colorido"
                src={"https://i.ibb.co/YBwqq1y/unnamed.jpg"}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="Fundo Colorido"
                src={"https://i.ibb.co/JnJXzG1/Rina-Hip-Hop-Dance-1024x683.jpg"}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="Fundo Colorido"
                src={
                  "https://i.ibb.co/B6nCJCw/Hip-Hop-Dance-Kathy-Liu-FSHA.jpg"
                }
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Link to="/meuenvio">
              <img
                alt="Fundo Colorido"
                src={"https://i.ibb.co/JnJXzG1/Rina-Hip-Hop-Dance-1024x683.jpg"}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="Fundo Colorido"
                src={
                  "https://i.ibb.co/B6nCJCw/Hip-Hop-Dance-Kathy-Liu-FSHA.jpg"
                }
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="Fundo Colorido"
                src={"https://i.ibb.co/YBwqq1y/unnamed.jpg"}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
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
  );
}
