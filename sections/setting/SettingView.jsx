import React from 'react'
import { Box } from '@mui/material'
const SettingView = () => {
  return (
    <container>
        <Box 
            sx={{
                padding: "30px",
                display: "flex",
                flexDirection: "column"
            }}
        >
        <h1 className="font-bold text-[24px] ">Settings</h1>
        </Box>
    </container>
  )
}

export default SettingView