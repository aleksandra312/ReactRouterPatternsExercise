import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import ColorNewForm from "./ColorNewForm";

function AppRoutes() {
  const INITIAL_COLORS = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColors] = useState(INITIAL_COLORS);

  useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [
    colors,
  ]);

  function handleAdd(newColorObj) {
    setColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <Routes>
      <Route exact path="/colors" element={<ColorList colors={colors} />} />
      <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
      <Route
        path="/colors/new"
        element={<ColorNewForm addColor={handleAdd} />}
      />
      <Route element={<Navigate to="/colors" />} />
    </Routes>
  );
}

export default AppRoutes;
