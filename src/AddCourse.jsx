import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

import "./assets/style.css";
import { Typography } from "@mui/material";
import AppBar from "./AppBar";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div className="welcome-msg-container">
        <Typography variant="h6">Add Course</Typography>
      </div>
      <div className="sign-up-form-container">
        <Card variant="outlined" className="form-container">
          <div className="sign-up-text-feild">
            <TextField
              fullWidth="true"
              label="Title"
              variant="outlined"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="sign-up-text-feild">
            <TextField
              fullWidth="true"
              label="Description"
              variant="outlined"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="sign-up-btn-container">
            <Button
              size="large"
              variant="contained"
              onClick={() =>
                fetch("http://localhost:3000/admin/courses", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    title: title,
                    description: description,
                    imgelink: "",
                    published: true,
                  }),
                }).then(console.log(localStorage.getItem("token")))
              }
            >
              Add
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddCourse;
