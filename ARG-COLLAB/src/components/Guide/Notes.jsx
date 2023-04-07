import React from "react";
// import { Card, CardContent, Typography, Link } from "@material-ui/core";
import { Card, CardContent, Typography, Link } from "@mui/material";

const NotesCard = ({ Subject, NotesUrl, VideoUrl }) => {
  const cardStyle = {
    minWidth: 275,
    maxWidth: 500,
    margin: "1rem auto",
    padding:"20px",
    lineHeight:"30px"

  };

  const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const subjectStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const linkStyle = {
    color: "#3f51b5",
  };

  return (
    <Card style={cardStyle}>
      
      <CardContent>
        <Typography variant="h6" component="h3" style={subjectStyle}>
          {Subject}
        </Typography>
        <Link href={NotesUrl} target="_blank" rel="noopener" style={linkStyle}>
          {"Notes " + NotesUrl}
        </Link><br/>
        <Link href={NotesUrl} target="_blank" rel="noopener" style={linkStyle}>
          {VideoUrl}
        </Link>
      </CardContent>
    </Card>
  );
};

export default NotesCard;
