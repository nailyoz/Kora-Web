import React from 'react';
import {
    Typography,
    Stack,
    Button,
    styled,
} from "@mui/material";

import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const CustomButtom = styled(Button)(({ theme }) => ({
    backgroundColor: "#E9C8FA",
    margin: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  }));
  
const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }));

  
export default function Row(titulo){ 
    return(
        <div style={{marginTop: "30px"}}>
        <Typography variant="h5" style={{ fontWeight: "bold", fontFamiky: "Gotham", textAlign: "center"}}>
            {titulo.titulo}
        </Typography>
        <Container>
          <CustomButtom>
            <ChevronLeft />
          </CustomButtom>
          <Stack direction="row" spacing={2}>
            <Thumbnail link="https://i.ibb.co/gTqz6Jg/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light-1.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/0fDNxdB/Pretty-woman-practising-hip-hop-dance-in-studio.jpg"></Thumbnail>
            <Thumbnail link="https://i.ibb.co/98cyc2t/young-beautiful-girl-dancing-hip-hop-street-style-isolated-studio-155003-13483.jpg"></Thumbnail>
          </Stack>
          <CustomButtom>
            <ChevronRight />
          </CustomButtom>
        </Container>
    </div>        
    )
}