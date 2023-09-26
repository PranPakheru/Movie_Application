import React from 'react'
import "./headerPartStyle.css"
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'



const headerPart = () => {
  return (
    <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Application...
          </Typography>
          
        </Toolbar>
      </AppBar>
  )
}

export default headerPart