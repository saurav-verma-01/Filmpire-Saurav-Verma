import React from "react";
import { CssBaseline } from "@mui/material";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<h1>Movies Data</h1>} />
        <Route
          path="/movie/:id"
          exact
          element={<h1>Particular Movie Data</h1>}
        />
        <Route
          path="/actors/:id"
          exact
          element={<h1>Particular Actors Information</h1>}
        />
        <Route
          path="/profile/:id"
          exact
          element={<h1>Profile Information</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
