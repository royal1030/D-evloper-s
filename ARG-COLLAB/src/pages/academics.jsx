// <<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import datafetch from "../database/academicsData.json";
// console.log(data);

export default function Academics() {
  //   const [data, useData] = useState([]);
  const { data1, data2, data3 } = datafetch;

  const HeadingStyle = {
    // backgroundColor: "#F7F1E5",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    // width:"100%"
    // alignItems:"center",
  };
  const DivStyle = {
    backgroundColor: "#B1EDE8",
    marginTop: "20px",
    borderRadius: "10px",
    padding: "15px",
    // height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // lineHeight:"50px"
  };
  const head1Style = {
    color: "#454545",
    // fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
  };
  const head2Style = {
    color: "lightcoral",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
    fontSize: "22px",
  };
  const head3Style = {
    color: "coral",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
    fontSize: "18px",
  };

  //   useEffect(() => {
  //     console.log("useeffect");
  //     fetch({ datafetch })
  //       .then((response) => response.text())
  //       .then((data) => {
  //         console.log(data);
  //         const parsedData = JSON.parse(data);
  //         console.log(parsedData, "data");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     console.log(datafetch);
  //     const names = datafetch.map(item => item.name);
  //   }, []);

  return (
    <>
      {/* <div>
        <h2>Data 1:</h2>
        <ul>
          {data1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Data 2:</h2>
        <ul>
          {data2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Data 3:</h2>
        <ul>
          {data3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}
      <Box
        sx={{
          backgroundColor: "#FFFCF9",
          padding: "30px",
          paddingRight: "80px",
          // marginRight: "50px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Typography variant="h3">Academics Details</Typography>
        </Box>

        <Grid container spacing={2} className="p-1" sx={{ margin: "20px" }}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Box sx={HeadingStyle}>
                <Typography variant="h4">EVENTS</Typography>
              </Box>

              <Typography
                variant="body1"
                sx={
                  {
                    // backgroundColor:""
                  }
                }
              >
                {data1.map((ele, index) => (
                  <Grid item xs={28} sm={12}>
                    <Box sx={DivStyle}>
                      <a
                        href={"http://www.iiitt.ac.in/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Typography variant="h5" sx={head1Style}>
                          {ele}
                        </Typography>
                      </a>
                    </Box>
                  </Grid>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h4" sx={HeadingStyle}>
                NEWS
              </Typography>
              <Typography variant="body1">
                {data2.map((ele, item) => (
                  <Grid item xs={28} sm={12}>
                    <Box sx={DivStyle}>
                      <a
                        href={"http://www.iiitt.ac.in/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Typography variant="h5" sx={head1Style}>
                          {ele}
                        </Typography>
                      </a>
                    </Box>
                  </Grid>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h4" sx={HeadingStyle}>
                NOTICE
              </Typography>
              <Typography variant="body1">
                {data3.map((ele, item) => (
                  <Grid key={item.id} item xs={28} sm={12}>
                    <Box sx={DivStyle}>
                      <a
                        href={"http://www.iiitt.ac.in/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Typography variant="h5" sx={head1Style}>
                          {ele}
                        </Typography>
                      </a>
                    </Box>
                  </Grid>
                ))}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
