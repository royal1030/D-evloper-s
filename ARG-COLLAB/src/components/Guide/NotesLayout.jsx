import React from "react";
import { Grid, Typography } from "@mui/material";
import NotesCard from "./Notes"
import NotesData from "./NotesData";
import Box from "@mui/material/Box";

const NotesLayout = () => {
    return (
      <Box sx={{ padding:"30px",  backgroundColor:"#FFFCF9", }}>

     <Typography variant="h3" sx={{textAlign:"center"}}> Notes</Typography>
      <Grid container spacing={2} sx={{display:"flex", justifyContent:"space-evenly", marginTop:"20px"}}>
        {NotesData.map((card) => (
          <Grid key={card.Subject} item >
            <NotesCard 
              Subject={card.Subject}
              NotesUrl={card.NotesUrl}
              VideoUrl={card.VideoUrl}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
    );
  };

export default NotesLayout;