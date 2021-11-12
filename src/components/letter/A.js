import React from "react";
import { Link } from "react-router-dom";

const A = () => (
  <section className="words">
    <h1>A</h1>
    <br />
    <p className="letter--word">
      <Link to="/AIRDROP">AIRDROP</Link>
    </p>
    <p className="letter--word">
      <Link to="/APE-IN">APE-IN</Link>
    </p>
    <p className="letter--word">
      <Link to="/ALL-TIME-HIGH">ATH</Link>
    </p>
    <p className="letter--word">
      <Link to="/AUTOGLYPHS">AUTOGLYPHS</Link>
    </p>
  </section>
);

export default A;
