import React from "react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <h1>Hello, World - Filmpire Project</h1>
      <Outlet />
    </div>
  );
};

export default App;
