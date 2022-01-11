import React from "react";
import { Link } from "react-router-dom";

const S = () => (
  <section className="words">
    <br />
    <br />
    <h1>S</h1>
    <br />
    <p className="letter--word">
      <Link to="/seed-phrase">SEED PHRASE</Link>
    </p>
    <p className="letter--word">
      <Link to="/ser">SER</Link>
    </p>
    <p className="letter--word">
      <Link to="/sha-256">SHA-256</Link>
    </p>
    <p className="letter--word">
      <Link to="/smart-contract">SMART CONTRACT</Link>
    </p>
    <p className="letter--word">
      <Link to="/solidity">SOLIDITY</Link>
    </p>
    <p className="letter--word">
      <Link to="/sweep-the-floor">SWEEP THE FLOOR</Link>
    </p>
  </section>
);

export default S;
