"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Home() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setLeftDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <GitHubIcon />
            </IconButton>
            <Button
              variant="text"
              color="inherit"
              disableRipple={true}
              sx={{ textTransform: "none" }}
            >
              DashBoard
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              disableRipple={true}
              variant="outlined"
              startIcon={<SearchIcon />}
              color="inherit"
              sx={{
                pr: 14,
                borderColor: "lightgray",
                color: "gray",
              }}
            >
              Type / to search
            </Button>
            <IconButton onClick={() => setRightDrawerOpen(true)}>
              <Avatar sx={{ width: 36, height: 36 }}>H</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          open={rightDrawerOpen}
          onClose={() => setRightDrawerOpen(false)}
          anchor="right"
        >
          <Box role="presentation" sx={{ width: 300 }}></Box>
        </Drawer>

        <Drawer
          open={leftDrawerOpen}
          onClose={() => setLeftDrawerOpen(false)}
          anchor="left"
        >
          <Box role="presentation" sx={{ width: 300 }}></Box>
        </Drawer>
      </Box>
    </>
  );
}
