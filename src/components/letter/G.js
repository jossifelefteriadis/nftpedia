import React from "react";
import { Link } from "react-router-dom";

const G = () => (
  <section className="words">
    <h1>G</h1>
    <br />
    <p className="letter--word">
      <Link to="/GAS-FEES">GAS FEES</Link>
    </p>
    <p className="letter--word">
      <Link to="/GAS-WAR">GAS WAR</Link>
    </p>
    <p className="letter--word">
      <Link to="/GMI">GMI (WAGMI / NGMI)</Link>
    </p>
    <p className="letter--word">
      <Link to="/GWEI">GWEI</Link>
    </p>
  </section>
);

export default G;
