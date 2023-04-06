import React from "react";
import { Box, Grid, Typography } from "@mui/material";
export default function Internship() {
  return (
    <>
      <h1 style={{ color: "#1287A8", margin: "20px 0px" }}>Internship</h1>
      {/* <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      > */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <h2>Data Science Intern</h2>
            <a
              href="https://internshala.com/internships/data-science-internship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">Internshala</Typography>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?currentJobId=3556661875&keywords=data%20science%20intern&refresh=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">LinkedIN</Typography>
            </a>
          </Box>
        </Grid>
        {/* <Grid item xs={12}> */}
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <h2>Frontend Intern</h2>
            <a
              href="https://internshala.com/internships/front-end-development-internship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">Internshala</Typography>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?currentJobId=3550270963&keywords=frontend%20intern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">LinkedIN</Typography>
            </a>
          </Box>
        </Grid>
        {/* <Grid item xs={12}> */}
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <h2>Backend Intern</h2>
            <a
              href="https://internshala.com/internships/backend-development-internship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">Internshala</Typography>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?currentJobId=3532023107&keywords=backend%20intern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">LinkedIN</Typography>
            </a>
          </Box>
        </Grid>
        {/* <Grid item xs={12}> */}
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <h2>Full Stack Intern</h2>
            <a
              href="https://internshala.com/internships/full-stack-development-internship/ppo-true/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">Internshala</Typography>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?currentJobId=3551437355&keywords=fulll%20stack%20intern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">LinkedIN</Typography>
            </a>
          </Box>
        </Grid>
        {/* <Grid item xs={12}> */}
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <h2>Android App Intern</h2>
            <a
              href="https://internshala.com/internships/android-app-development-internship/ppo-true/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">Internshala</Typography>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?currentJobId=3518819913&keywords=android%20development%20intern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">LinkedIN</Typography>
            </a>
          </Box>
        </Grid>
        {/* <Grid item xs={12}> */}
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <h2>Flutter Intern </h2>
            <a
              href="https://internshala.com/internships/work-from-home-flutter-development-internships/ppo-true/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">Internshala</Typography>
            </a>
            <a
              href="https://www.linkedin.com/jobs/search/?currentJobId=3479889346&keywords=flutter%20intern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">LinkedIN</Typography>
            </a>
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </>
  );
}
