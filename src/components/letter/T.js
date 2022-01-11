import React from "react";
import { Link } from "react-router-dom";

const T = () => (
  <section className="words">
    <br />
    <br />
    <h1>T</h1>
    <br />
    <p className="letter--word">
      <Link to="/testnet">TESTNET</Link>
    </p>
    <p className="letter--word">
      <Link to="/tezos">TEZOS</Link>
    </p>
  </section>
);

export default T;
