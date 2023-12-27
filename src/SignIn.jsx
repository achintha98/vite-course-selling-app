import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

import "./assets/style.css";
import { Typography } from "@mui/material";

const SignUp = () => {
  return (
    <div>
      <div className="welcome-msg-container">
        <Typography variant="h6">Welcome Back. Sign in below</Typography>
      </div>
      <div className="sign-up-form-container">
        <Card variant="outlined" className="form-container">
          <div className="sign-up-text-feild">
            <TextField
              fullWidth="true"
              id="outlined-basic"
              label="UserName"
              variant="outlined"
            />
          </div>
          <div className="sign-up-text-feild">
            <TextField
              fullWidth="true"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
          </div>
          <div className="sign-up-btn-container">
            <Button size="large" variant="contained">
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
