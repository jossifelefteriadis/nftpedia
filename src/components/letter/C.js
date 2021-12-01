import React from "react";
import { Link } from "react-router-dom";

const C = () => (
  <section className="words">
    <h1>C</h1>
    <br />
    <p className="letter--word">
      <Link to="/cash-grab">CASH GRAB</Link>
    </p>
    <p className="letter--word">
      <Link to="/cold-storage">COLD STORAGE</Link>
    </p>
    <p className="letter--word">
      <Link to="/collab-land">COLLAB.LAND (BOT)</Link>
    </p>
    <p className="letter--word">
      <Link to="/cryptocurrency-wallet">CRYPTOCURRENCY WALLET</Link>
    </p>
    <p className="letter--word">
      <Link to="/cryptopunks">CRYPTOPUNKS</Link>
    </p>
  </section>
);

export default C;
