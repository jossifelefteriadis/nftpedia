import React from "react";
import { Link } from "react-router-dom";

const A = () => (
  <section className="words">
    <h1>A</h1>
    <br />
    <br />
    <p className="letter--word">
      <Link to="/airdrop">AIRDROP</Link>
    </p>
    <p className="letter--word">
      <Link to="/ape-in">APE-IN</Link>
    </p>
    <p className="letter--word">
      <Link to="/all-time-high">ATH</Link>
    </p>
    <p className="letter--word">
      <Link to="/autoglyphs">AUTOGLYPHS</Link>
    </p>
  </section>
);

export default A;
