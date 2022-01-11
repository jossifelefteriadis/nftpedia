import React from "react";
import { Link } from "react-router-dom";

const G = () => (
  <section className="words">
    <br />
    <br />
    <h1>G</h1>
    <br />
    <p className="letter--word">
      <Link to="/gas-fees">GAS FEES</Link>
    </p>
    <p className="letter--word">
      <Link to="/gas-war">GAS WAR</Link>
    </p>
    <p className="letter--word">
      <Link to="/gmi">GMI (WAGMI / NGMI)</Link>
    </p>
    <p className="letter--word">
      <Link to="/gwei">GWEI</Link>
    </p>
  </section>
);

export default G;
