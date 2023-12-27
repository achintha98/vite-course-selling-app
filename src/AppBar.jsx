import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./assets/style.css";

const AppBar = () => {
  return (
    <div className="app-bar-container">
      <div>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div>
        <div className="app-bar-btn-container">
          <div className="sign-button">
            <Button size="large" variant="contained">
              Sign Up
            </Button>
          </div>
          <div>
            <Button size="large" variant="contained">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
