import React from "react";
import { Link } from "react-router-dom";

const B = () => (
  <section className="words">
    <h1>B</h1>
    <br />
    <p className="letter--word">
      <Link to="/BAG">BAG</Link>
    </p>
    <p className="letter--word">
      <Link to="/BLOCK">BLOCK</Link>
    </p>
    <p className="letter--word">
      <Link to="/BLOCKCHAIN">BLOCKCHAIN</Link>
    </p>
    <p className="letter--word">
      <Link to="/BORED-APES-YACHT-CLUB">BORED APES YACHT CLUB</Link>
    </p>
    <p className="letter--word">
      <Link to="/BOT">BOT</Link>
    </p>
  </section>
);

export default B;
