import React from "react";
import { Link } from "react-router-dom";

<Link to="/">Hem</Link>;

const Alphabet = () => (
  <section className="alphabet">
    <p className="letter">
      <Link to="/A">A</Link>
    </p>
    <p className="letter">B</p> <p className="letter">C</p>{" "}
    <p className="letter">D</p> <p className="letter">E</p>{" "}
    <p className="letter">F</p> <p className="letter">G</p>{" "}
    <p className="letter">H</p> <p className="letter">I</p>{" "}
    <p className="letter">J</p> <p className="letter">K</p>{" "}
    <p className="letter">L</p> <p className="letter">M</p>{" "}
    <p className="letter">N</p> <p className="letter">O</p>{" "}
    <p className="letter">P</p> <p className="letter">Q</p>{" "}
    <p className="letter">R</p> <p className="letter">S</p>{" "}
    <p className="letter">T</p> <p className="letter">U</p>{" "}
    <p className="letter">V</p> <p className="letter">W</p>{" "}
    <p className="letter">X</p> <p className="letter">Y</p>{" "}
    <p className="letter">Z</p>
  </section>
);

export default Alphabet;
