// <<<<<<< HEAD
// import React from "react";

// export default function Coding () {
//      return (
//         <>

//         </>
//      )
// };
// =======
import React, { useState, useEffect } from "react";
// import * as React from "react";

// import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";

const Coding = () => {
  const [datas, setDatas] = useState([]);
  const [codechefdata, setcodechefdata] = useState([]);
  const [hackcon, sethackcon] = useState([]);
  const [time, settime] = useState();

  const getTime = (time) => {
    // const startTimeSecond = time.startTimeSeconds;
    const relativeTimeSecond = time.relativeTimeSeconds;

    // Format the date as a string
    // const startTimeString = startDate.toLocaleString(); // e.g. "1/2/2023, 3:30:55 PM"

    // console.log(startTimeString);
    const hoursLeft = relativeTimeSecond / -3600;
    const hours = Math.floor(hoursLeft);
    const minutes = Math.round((hoursLeft - hours) * 60);
    return `${hours} hours ${minutes} minutes`;
  };

  const getutc = (utcTime) => {
    const localTime = new Date(utcTime).toLocaleString();
    console.log(localTime);

    return `${localTime}`;
  };

  // https://kontests.net/api/v1/codeforces

  useEffect(() => {
    fetch("https://kontests.net/api/v1/codeforces")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data); // set the filtered contests in state
        // console.log(filteredContests); // log the filtered contests
      })
      .catch((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   fetch("https://codeforces.com/api/contest.list")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const contests = data.result; // extract the array of contests from the API response
  //       const filteredContests = contests.filter(
  //         (contest) => contest.phase === "BEFORE"
  //       ); // filter the contests by phase
  //       setDatas(filteredContests); // set the filtered contests in state
  //       console.log(filteredContests); // log the filtered contests
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    console.log("run or not");
    const API_URL = "https://kontests.net/api/v1/code_chef";
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // const contests = data["future_contests"]; // extract the array of present contests from the API response

        // const contests = data.future_contests;
        // console.log(contests, "contests");
        // console.log(data, "data");
        setcodechefdata(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/hacker_earth")
      .then((response) => response.json())
      .then((data) => {
        sethackcon(data); // set the filtered contests in state
        // console.log(hackcon); // log the filtered contests
      })
      .catch((error) => console.error(error));
  }, []);

  // https://kontests.net/api/v1/all

// <<<<<<< HEAD
  const HeadingStyle = {
    backgroundColor: "#B1EDE8",
    padding: "20px",
    borderRadius: "10px",
    display:"flex",
    justifyContent:"center",
    // width:"100%"
    // alignItems:"center",
    
  }
  const DivStyle = {
    // backgroundColor: "teal",
    marginTop: "20px",
    borderRadius: "10px",
    padding: "10px",
    // height: "30vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // lineHeight:"50px"
  }
  const head1Style = {
    color: "#454545",
    fontWeight: "bold",
    fontSize:"20px",
    cursor:"pointer"
  }
  const head2Style = {
    color: "lightcoral",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
    fontSize: "22px",
// =======
//   return (
//     <Grid container spacing={2} className="p-1">
//       <Grid item xs={12} sm={4}>
//         <Box>
//           <Typography variant="h4" sx={{ backgroundColor: "blue" }}>
//             Codeforces Contests
//           </Typography>
//           <Typography variant="body1">
//             {datas.map((item) => (
//               <Grid key={item.id} item xs={28} sm={12}>
//                 <Box>
//                   <a href={item.url} target="_blank" rel="noopener noreferrer">
//                     <Typography variant="h5">{item.name}</Typography>
//                   </a>
//                   <Typography
//                     variant="h8"
//                     // sx={{ color: "royalblue", fontSize: "24px" }}
//                     sx={{
//                       color: "royalblue",
//                       textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Contest Date :
//                   </Typography>
//                   <Typography variant="body1">
//                     {getutc(item.start_time)}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Typography>
//         </Box>
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <Box>
//           <Typography variant="h3" sx={{ backgroundColor: "blue" }}>
//             Codechef Contests
//           </Typography>
//           <Typography variant="body1">
//             {codechefdata.map((item) => (
//               <Grid key={item.id} item xs={28} sm={12}>
//                 <Box>
//                   <a href={item.url} target="_blank" rel="noopener noreferrer">
//                     <Typography variant="h5">{item.name}</Typography>
//                   </a>
//                   <Typography
//                     variant="h8"
//                     // sx={{ color: "royalblue", fontSize: "24px" }}
//                     sx={{
//                       color: "royalblue",
//                       textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Contest Date :
//                   </Typography>
//                   <Typography variant="body1"> {item.start_time}</Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Typography>
//         </Box>
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <Box>
//           <Typography variant="h3" sx={{ backgroundColor: "blue" }}>
//             Atcoder Contests
//           </Typography>
//           <Typography variant="body1">
//             {hackcon.map((item) => (
//               <Grid key={item.id} item xs={28} sm={12}>
//                 <Box>
//                   <a href={item.url} target="_blank" rel="noopener noreferrer">
//                     <Typography variant="h5">{item.name}</Typography>
//                   </a>
//                   <Typography
//                     variant="h8"
//                     // sx={{ color: "royalblue", fontSize: "24px" }}
//                     sx={{
//                       color: "royalblue",
//                       textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Contest Date :
//                   </Typography>
// >>>>>>> ffd0d63252782945c113c0978662f3622a7e897b

  }
  const head3Style = {
    color: "coral",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
    fontSize: "18px",

  }
  return (
    <>
      <Box sx={{
       
        backgroundColor: "#FFFCF9",
        padding: "30px",
        paddingRight:"80px",
        // marginRight: "50px"

      }}>
<Box sx={{ display:"flex", justifyContent:"center", alignItem:"center"}}>
<Typography variant="h3" >Contest Page</Typography>
</Box>
        
        <Grid container spacing={2} className="p-1" sx={{ margin: "20px" }}>

          <Grid item xs={12} sm={4}>
            <Box>
              <Box  sx={HeadingStyle}>
              <Typography variant="h4"
               >
                CODEFORCES
              </Typography>
              </Box>
              
              <Typography variant="body1" sx={{
                // backgroundColor:""
              }}>
                {datas.map((item) => (
                  <Grid key={item.id} item xs={28} sm={12}>
                    <Box sx={DivStyle}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Typography variant="h5" sx={head1Style}>{item.name}</Typography>
                      </a>
                      <Typography
                        variant="h8"
                        // sx={{ color: "royalblue", fontSize: "24px" }}
                        sx={head2Style}
                      >
                        Contest Date :
                      </Typography>
                      <Typography variant="body1"
                        sx={head3Style}>
                        {getutc(item.start_time)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h4" sx={HeadingStyle}>
                CODECHEF
              </Typography>
              <Typography variant="body1">
                {codechefdata.map((item) => (
                  <Grid key={item.id} item xs={28} sm={12}>
                    <Box sx={DivStyle}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Typography variant="h5" sx={head1Style}>{item.name}</Typography>
                      </a>
                      <Typography
                        variant="h8"
                        // sx={{ color: "royalblue", fontSize: "24px" }}
                        sx={head2Style}
                      >
                        Contest Date :
                      </Typography>
                      <Typography variant="body1"  sx={head3Style}> {item.start_time}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h4" sx={HeadingStyle}>
                ATCODER 
              </Typography>
              <Typography variant="body1">
                {hackcon.map((item) => (
                  <Grid key={item.id} item xs={28} sm={12}>
                    <Box sx={DivStyle}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Typography variant="h5" sx={head1Style}>{item.name}</Typography>
                      </a>
                      <Typography
                        variant="h8"
                        // sx={{ color: "royalblue", fontSize: "24px" }}
                        sx={head2Style}
                      >
                        Contest Date :
                      </Typography>

                      <Typography variant="body1"  sx={head3Style}>
                        {getutc(item.start_time)}
                      </Typography>
                      {/* <Typography variant="body1">
                    Contest Date : {item.contest_start_date}
                  </Typography> */}
{/* <<<<<<< HEAD */}
                    </Box>
                  </Grid>
                ))}
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </>
// =======
//                 </Box>
//               </Grid>
//             ))}
//           </Typography>
//         </Box>
//       </Grid>
//     </Grid>
// // >>>>>>> 4ff27f34cfcede3eb4824829ec1cd8bace2f21d9
// >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892
  );
};

export default Coding;

{/* // const exactStartTime = (startTimeSeconds + relativeTimeSeconds) * 1000; // Convert to milliseconds

// // Create a Date object from the exact start time
// const startDate = new Date(exactStartTime);

// // Format the date as a string
// const startTimeString = startDate.toLocaleString();
<<<<<<< HEAD
>>>>>>> 82d9522b001f6affeaa2a3d65da25d482cdfb80b */}
// =======
// >>>>>>> 82d9522b001f6affeaa2a3d65da25d482cdfb80b
// >>>>>>> a7daa45f21fb209b39f9f9c2887144192bd95892
