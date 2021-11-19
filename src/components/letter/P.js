import React from "react";
import { Link } from "react-router-dom";

const P = () => (
  <section className="words">
    <h1>P</h1>
    <br />
    <p className="letter--word">
      <Link to="/P2E">P2e</Link>
    </p>
    <p className="letter--word">
      <Link to="/PAPER-HANDS">PAPER HANDS</Link>
    </p>
    <p className="letter--word">
      <Link to="/PFP">PFP</Link>
    </p>
    <p className="letter--word">
      <Link to="/PRE-SALE">PRE-SALE</Link>
    </p>
    <p className="letter--word">
      <Link to="/PROVENANCE">PROVENANCE</Link>
    </p>
    <p className="letter--word">
      <Link to="/PUMP-N-DUMP">PUMP 'N DUMP</Link>
    </p>
  </section>
);

export default P;
