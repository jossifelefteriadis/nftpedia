import React from "react";

const FailedTransaction = () => (
  <section className="word-description-container">
    <h1>Failed Transaction</h1>
    <p>
      Om en transaktion inte går igenom, betyder det att den inte lagts till på
      blockchain. I de flesta fall händer detta på grund av att den summan gas
      fees som betalades vid tidpunkten var för låg i relation med netvärkets
      aktivitet (andra användare betalade högre gas fees och prioriterades
      därför före dig, och av den anledningen gick inte din transaktion igenom).
      <br />
      <br />
      När en transaktion inte går igenom så går du miste om gas fees som du
      skickade med din transaktion. Anledningen till detta är för att när man
      skickar en transaktion så krävs det att miners validerar och exekverar
      den, oavsett om den lyckas eller ej.
    </p>
  </section>
);

export default FailedTransaction;
