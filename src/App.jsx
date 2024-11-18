import { useState } from "react";
import PropTypes from "prop-types";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Data from "./components/Data";
import Knopf from "./components/Knopf";
import Graph from "./components/Graph";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GamepadIcon from "@mui/icons-material/Gamepad";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem key="Home" disablePadding>
            <ListItemButton component={RouterLink} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Data" disablePadding>
            <ListItemButton component={RouterLink} to="/data">
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Data" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Knopf" disablePadding>
            <ListItemButton component={RouterLink} to="/knopf">
              <ListItemIcon>
                <GamepadIcon />
              </ListItemIcon>
              <ListItemText primary="Knopf" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Graph" disablePadding>
            <ListItemButton component={RouterLink} to="/graph">
              <ListItemIcon>
                <SsidChartIcon />
              </ListItemIcon>
              <ListItemText primary="Graph" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, mt: 8 }}
      >
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/data" element={<Data />} />
          <Route path="/knopf" element={<Knopf />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
