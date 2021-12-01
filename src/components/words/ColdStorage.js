import React from "react";

const ColdStorage = () => (
  <section className="word-description-container">
    <h1>ColdStorage</h1>
    <p>
      Cold storage är en offline wallet (plånbok) som används för att lagra
      cryptovalutor eller NFT.
      <br />
      Att plånboken inte är uppkopplad till Internet skyddar plånboken från
      oaktoriserade att komma åt den.
      <br />
      <br />
      Den vanligaste typen av cold storage är en plånbok lagrat på ett usb
      minne.
      <br />
      Populära cold storage plånböcker:
      <br />-{" "}
      <a href="https://www.ledger.com" target="_blank" rel="noreferrer">
        Ledger
      </a>
      -{" "}
      <a href="https://www.trezor.io" target="_blank" rel="noreferrer">
        Trezor
      </a>
    </p>
  </section>
);

export default ColdStorage;
