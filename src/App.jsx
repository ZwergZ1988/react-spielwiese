import { useState } from "react";
import PropTypes from "prop-types";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Data from "./components/Data";
import Knopf from "./components/Knopf";

function App() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button component={RouterLink} to="/">
          HOME
        </Button>
        <Button component={RouterLink} to="/data">
          DATA
        </Button>
        <Button component={RouterLink} to="/knopf">
          KNOPF
        </Button>
      </Stack>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/data" element={<Data />} />
        <Route path="/knopf" element={<Knopf />} />
      </Routes>
    </>
  );
}

export default App;
