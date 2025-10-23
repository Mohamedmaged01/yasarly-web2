import React, { useState } from "react";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

const DropDownMenu = ({ view, setView }) => {
  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ Width: 100, borderRadius: "12px" }}>
      <Select
        labelId="view-selector-label"
        id="view-selector"
        value={view}
        defaultValue="Courses"
        onChange={handleChange}
        label="View"
        sx={{
          borderRadius: "12px",
          background: "#0A90B0",
        }}
      >
        <MenuItem
          sx={{
            color: "black",
          }}
          value="courses"
        >
          Courses
        </MenuItem>
        <MenuItem value="instructors">Instructors</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDownMenu;
