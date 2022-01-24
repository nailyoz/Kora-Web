import React from 'react';
import {
    Typography,
    Card,
    CardContent,
    Chip,
    Stack,
} from "@mui/material";

export default function Thumbnail(link){ 
    return(
    <Card style={{ height: "250px",
                    display: "flex",
                    alignItems: "center",}}>
        <CardContent>
            <img
             alt="Fundo Colorido"
             src={link.link}
             width="300px"
             height="150px"
             style={{objectFit: "cover"}}
            ></img>
            <Stack direction="row" spacing={1}>
            <Chip
            label="Nível"
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
    )            
}