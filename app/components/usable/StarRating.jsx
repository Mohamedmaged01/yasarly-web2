"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
export default function StarRating() {
  const [value, setValue] = useState(4.5);
  return (
    <Box sx={{ width: 150 }}>
      <Typography component="legend"></Typography>
      <Rating
        name="read-only"
        value={value}
        readOnly
        precision={0.5}
        sx={{ fontSize: 30, marginRight: 5, top: 2 }}
      />
    </Box>
  );
}
