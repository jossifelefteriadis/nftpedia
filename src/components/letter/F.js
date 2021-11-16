import React from "react";
import { Link } from "react-router-dom";

const F = () => (
  <section className="words">
    <h1>F</h1>
    <br />
    <p className="letter--word">
      <Link to="/FAILED-TRANSACTION">FAILED TRANSACTION</Link>
    </p>
    <p className="letter--word">
      <Link to="/FLIP">FLIP</Link>
    </p>
    <p className="letter--word">
      <Link to="/FLIPPER">FLIPPER</Link>
    </p>
    <p className="letter--word">
      <Link to="/FLOOR-PRICE">FLOOR PRICE</Link>
    </p>
    <p className="letter--word">
      <Link to="/FUD">FUD</Link>
    </p>
  </section>
);

export default F;
