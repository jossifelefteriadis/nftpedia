import React from "react";
import { Link } from "react-router-dom";

const S = () => (
  <section className="words">
    <h1>S</h1>
    <br />
    <p className="letter--word">
      <Link to="/SEED-PHRASE">SEED PHRASE</Link>
    </p>
    <p className="letter--word">
      <Link to="/SER">SER</Link>
    </p>
    <p className="letter--word">
      <Link to="/SHA-256">SHA-256</Link>
    </p>
    <p className="letter--word">
      <Link to="/SMART-CONTRACT">SMART CONTRACT</Link>
    </p>
    <p className="letter--word">
      <Link to="/SOLIDITY">SOLIDITY</Link>
    </p>
    <p className="letter--word">
      <Link to="/SWEEP-THE-FLOOR">SWEEP THE FLOOR</Link>
    </p>
  </section>
);

export default S;
