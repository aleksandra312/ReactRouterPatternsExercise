import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));
  return (
    <div className="ColorList">
      <h1>Welcome to the color factory.</h1>
      <h3>
        <Link to="/colors/new">Add a color</Link>
      </h3>
      <p>Please select a color</p>
      <ul>{colorLinks}</ul>
    </div>
  );
};

export default ColorList;
