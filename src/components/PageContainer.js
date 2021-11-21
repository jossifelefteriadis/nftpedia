import React from "react";
import { Route, Switch } from "react-router-dom";
// , Link, Switch

import Alphabet from "./Alphabet";
import Dropdown from "./Dropdown";
import About from "./About";

import StartPage from "./StartPage";
import NftDescription from "./NftDescription";
// import Airdrop from "./words/Airdrop";

import A from "./letter/A";
import B from "./letter/B";
import C from "./letter/C";
import D from "./letter/D";
import E from "./letter/E";
import F from "./letter/F";
import G from "./letter/G";
import H from "./letter/H";
import I from "./letter/I";
import J from "./letter/J";
import K from "./letter/K";
import L from "./letter/L";
import M from "./letter/M";
import N from "./letter/N";
import O from "./letter/O";
import P from "./letter/P";
import Q from "./letter/Q";
import R from "./letter/R";
import S from "./letter/S";
import T from "./letter/T";
import U from "./letter/U";
import V from "./letter/V";
import W from "./letter/W";
import X from "./letter/X";
import Y from "./letter/Y";
import Z from "./letter/Z";

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
          <Route path="/B">
            <B />
          </Route>
          <Route path="/C">
            <C />
          </Route>
          <Route path="/D">
            <D />
          </Route>
          <Route path="/E">
            <E />
          </Route>
          <Route path="/F">
            <F />
          </Route>
          <Route path="/G">
            <G />
          </Route>
          <Route path="/H">
            <H />
          </Route>
          <Route path="/I">
            <I />
          </Route>
          <Route path="/J">
            <J />
          </Route>
          <Route path="/K">
            <K />
          </Route>
          <Route path="/L">
            <L />
          </Route>
          <Route path="/M">
            <M />
          </Route>
          <Route path="/N">
            <N />
          </Route>
          <Route path="/O">
            <O />
          </Route>
          <Route path="/P">
            <P />
          </Route>
          <Route path="/Q">
            <Q />
          </Route>
          <Route path="/R">
            <R />
          </Route>
          <Route path="/S">
            <S />
          </Route>
          <Route path="/T">
            <T />
          </Route>
          <Route path="/U">
            <U />
          </Route>
          <Route path="/V">
            <V />
          </Route>
          <Route path="/W">
            <W />
          </Route>
          <Route path="/X">
            <X />
          </Route>
          <Route path="/Y">
            <Y />
          </Route>
          <Route path="/Z">
            <Z />
          </Route>
          <Route path="/omoss">
            <About />
          </Route>
          <Route path="/">
            <Alphabet />
            <Dropdown />
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
