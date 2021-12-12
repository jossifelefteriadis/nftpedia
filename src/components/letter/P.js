import React from "react";
import { Link } from "react-router-dom";

const P = () => (
  <section className="words">
    <h1>P</h1>
    <br />
    <p className="letter--word">
      <Link to="/p2e">P2E</Link>
    </p>
    <p className="letter--word">
      <Link to="/paper-hands">PAPER HANDS</Link>
    </p>
    <p className="letter--word">
      <Link to="/pfp">PFP</Link>
    </p>
    <p className="letter--word">
      <Link to="/pre-sale">PRE-SALE</Link>
    </p>
    <p className="letter--word">
      <Link to="/provenance">PROVENANCE</Link>
    </p>
    <p className="letter--word">
      <Link to="/pump-n-dump">PUMP 'N DUMP</Link>
    </p>
  </section>
);

export default P;
