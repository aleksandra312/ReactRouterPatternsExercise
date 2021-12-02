import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ColorDetail({ colors }) {
  const { color } = useParams();
  const hex = colors[color];

  const navigate = useNavigate();
  if (!hex) {
    navigate("/colors");
  }

  return (
    <div className="ColorDetail" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>
        <Link to="/colors">Go back</Link>
      </p>
    </div>
  );
}

export default ColorDetail;
