import React from "react";
import { Route, Switch } from "react-router-dom";
// , Link, Switch

import Alphabet from "./Alphabet";
import Dropdown from "./Dropdown";
import About from "./About";

import StartPage from "./StartPage";
import NftDescription from "./NftDescription";

import Airdrop from "./words/Airdrop";
import ApeIn from "./words/ApeIn";
import ATH from "./words/ATH";
import Autoglyphs from "./words/Autoglyphs";

import Bag from "./words/Bag";
import Block from "./words/Block";
import Blockchain from "./words/Blockchain";
import BAYC from "./words/BAYC";
import Bot from "./words/Bot";

import CashGrab from "./words/CashGrab";
import ColdStorage from "./words/ColdStorage";
import CollabLand from "./words/CollabLand";
import CryptocurrencyWallet from "./words/CryptocurrencyWallet";
import Cryptopunks from "./words/Cryptopunks";

import Decentraland from "./words/Decentraland";
import Decentralized from "./words/Decentralized";
import DiamondHands from "./words/DiamondHands";
import Drop from "./words/Drop";
import DuneAnalytics from "./words/DuneAnalytics";

import Erc721 from "./words/Erc721";
import Ether from "./words/Ether";
import Etherscan from "./words/Etherscan";

import FailedTransaction from "./words/FailedTransaction";
import Flip from "./words/Flip";
import Flipper from "./words/Flipper";
import FloorPrice from "./words/FloorPrice";
import Fud from "./words/Fud";

import GasFees from "./words/GasFees";
import GasWar from "./words/GasWar";
import GMI from "./words/GMI";
import GWEI from "./words/GWEI";

import Hash from "./words/Hash";
import Hodl from "./words/Hodl";

import IPFS from "./words/IPFS";

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
          <Route path="/airdrop">
            <Airdrop />
          </Route>
          <Route path="/ape-in">
            <ApeIn />
          </Route>
          <Route path="/all-time-high">
            <ATH />
          </Route>
          <Route path="/autoglyphs">
            <Autoglyphs />
          </Route>
          <Route path="/bag">
            <Bag />
          </Route>
          <Route path="/block">
            <Block />
          </Route>
          <Route path="/blockchain">
            <Blockchain />
          </Route>
          <Route path="/bored-apes-yacht-club">
            <BAYC />
          </Route>
          <Route path="/bot">
            <Bot />
          </Route>
          <Route path="/cash-grab">
            <CashGrab />
          </Route>
          <Route path="/cold-storage">
            <ColdStorage />
          </Route>
          <Route path="/collab-land">
            <CollabLand />
          </Route>
          <Route path="/cryptocurrency-wallet">
            <CryptocurrencyWallet />
          </Route>
          <Route path="/cryptopunks">
            <Cryptopunks />
          </Route>
          <Route path="/decentraland">
            <Decentraland />
          </Route>
          <Route path="/decentralized">
            <Decentralized />
          </Route>
          <Route path="/diamond-hands">
            <DiamondHands />
          </Route>
          <Route path="/drop">
            <Drop />
          </Route>
          <Route path="/dune-analytics">
            <DuneAnalytics />
          </Route>
          <Route path="/erc-721">
            <Erc721 />
          </Route>
          <Route path="/ether">
            <Ether />
          </Route>
          <Route path="/etherscan">
            <Etherscan />
          </Route>
          <Route path="/failed-transaction">
            <FailedTransaction />
          </Route>
          <Route path="/flip">
            <Flip />
          </Route>
          <Route path="/flipper">
            <Flipper />
          </Route>
          <Route path="/floor-price">
            <FloorPrice />
          </Route>
          <Route path="/fud">
            <Fud />
          </Route>
          <Route path="/gas-fees">
            <GasFees />
          </Route>
          <Route path="/gmi">
            <GMI />
          </Route>
          <Route path="/gwei">
            <GWEI />
          </Route>
          <Route path="/gas-war">
            <GasWar />
          </Route>
          <Route path="/hash">
            <Hash />
          </Route>
          <Route path="/hodl">
            <Hodl />
          </Route>
          <Route path="/ipfs">
            <IPFS />
          </Route>
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
