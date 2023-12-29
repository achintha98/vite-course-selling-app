import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./assets/style.css";

const AppBar = () => {
  const [username, setUserName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      res.json().then((data) => {
        setUserName(data.username);
      });
    });
  }, []);

  if (username) {
    return (
      <div className="app-bar-container">
        <div>
          <Typography variant="h6">Coursera</Typography>
        </div>
        <div>
          <div className="app-bar-btn-container">
            <div className="sign-button">{username}</div>
            <div>
              <Button
                size="large"
                variant="contained"
                onClick={localStorage.setItem("token", null)}
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
