import React from "react";
import { Link } from "react-router-dom";

const T = () => (
  <section className="words">
    <h1>T</h1>
    <br />
    <p className="letter--word">
      <Link to="/TESTNET">TESTNET</Link>
    </p>
    <p className="letter--word">
      <Link to="/TEZOS">TEZOS</Link>
    </p>
  </section>
);

export default T;
