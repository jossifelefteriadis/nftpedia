import React from "react";
import { Link } from "react-router-dom";

const C = () => (
  <section className="words">
    <h1>C</h1>
    <br />
    <p className="letter--word">
      <Link to="/CASH-GRAB">CASH GRAB</Link>
    </p>
    <p className="letter--word">
      <Link to="/COLD-STORAGE">COLD STORAGE</Link>
    </p>
    <p className="letter--word">
      <Link to="/COLLAB-LAND">COLLAB.LAND (BOT)</Link>
    </p>
    <p className="letter--word">
      <Link to="/CRYPTOCURRENCY-WALLET">CRYPTOCURRENCY WALLET</Link>
    </p>
    <p className="letter--word">
      <Link to="/CRYPTOPUNKS">CRYPTOPUNKS</Link>
    </p>
  </section>
);

export default C;
