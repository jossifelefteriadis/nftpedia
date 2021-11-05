import React from "react";
import { Route, Switch } from "react-router-dom";
// , Link, Switch

import Alphabet from "./Alphabet";
import About from "./About";

import StartPage from "./StartPage";
import NftDescription from "./NftDescription";
// import Airdrop from "./words/Airdrop";

import A from "./letter/A";

export default class PageContainer extends React.Component {
  render() {
    return (
      <section className="pagecontainer">
        <Switch>
          {/* <Alphabet /> */}
          {/* <Route path="/airdrop">
            <Airdrop />
          </Route> */}
          <Route path="/A">
            <A />
          </Route>
          <Route path="/omoss">
            <About />
          </Route>
          <Route path="/">
            <Alphabet />
            <StartPage />
            <NftDescription />
          </Route>

          {/* <p>3 kolumner.</p>
          <p>
            En bild/länken kan handla om Vad är NFT (eller om detta är en
            paragraf)
          </p>
          <p>En bild/länken kan handla om olika wallets</p>
          <p>En bild/länken kan handla networks med smart contracts</p> */}
        </Switch>
      </section>
    );
  }
}
