import React from "react";
import { Link } from "react-router-dom";

const A = () => (
  <section className="words">
    <h1>A</h1>
    <br />
    <p className="letter--word">
      <Link to="/Airdrop">AIRDROP</Link>
    </p>
    <p className="letter--word">
      <Link to="/Ape-In">APE-IN</Link>
    </p>
    <p className="letter--word">
      <Link to="/All-Time-High">ATH</Link>
    </p>
    <p className="letter--word">
      <Link to="/Autoglyphs">Autoglyphs</Link>
    </p>
  </section>
);

export default A;
