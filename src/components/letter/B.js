import React from "react";
import { Link } from "react-router-dom";

const B = () => (
  <section className="words">
    <br />
    <br />
    <h1>B</h1>
    <br />
    <p className="letter--word">
      <Link to="/bag">BAG</Link>
    </p>
    <p className="letter--word">
      <Link to="/block">BLOCK</Link>
    </p>
    <p className="letter--word">
      <Link to="/blockchain">BLOCKCHAIN</Link>
    </p>
    <p className="letter--word">
      <Link to="/bored-apes-yacht-club">BORED APES YACHT CLUB</Link>
    </p>
    <p className="letter--word">
      <Link to="/bot">BOT</Link>
    </p>
  </section>
);

export default B;
