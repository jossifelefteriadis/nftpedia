import React from "react";
import { Link } from "react-router-dom";

const F = () => (
  <section className="words">
    <h1>F</h1>
    <br />
    <p className="letter--word">
      <Link to="/failed-transaction">FAILED TRANSACTION</Link>
    </p>
    <p className="letter--word">
      <Link to="/flip">FLIP</Link>
    </p>
    <p className="letter--word">
      <Link to="/flipper">FLIPPER</Link>
    </p>
    <p className="letter--word">
      <Link to="/floor-price">FLOOR PRICE</Link>
    </p>
    <p className="letter--word">
      <Link to="/fud">FUD</Link>
    </p>
  </section>
);

export default F;
