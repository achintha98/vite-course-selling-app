import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

import "./assets/style.css";
import { Typography } from "@mui/material";
import AppBar from "./AppBar";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="welcome-msg-container">
        <Typography variant="h6">Welcome to Course. Sign up below</Typography>
      </div>
      <div className="sign-up-form-container">
        <Card variant="outlined" className="form-container">
          <div className="sign-up-text-feild">
            <TextField
              fullWidth="true"
              label="UserName"
              variant="outlined"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="sign-up-text-feild">
            <TextField
              fullWidth="true"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="sign-up-btn-container">
            <Button
              size="large"
              variant="contained"
              onClick={() =>
                fetch("http://localhost:3000/admin/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username: userName,
                    password: password,
                  }),
                }).then((res) => {
                  console.log(res);
                  res.json().then((data) => {
                    localStorage.setItem("token", data.token);
                  });
                })
              }
            >
              Sign Up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
