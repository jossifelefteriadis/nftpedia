import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
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

import LowballOffer from "./words/LowballOffer";

import Mainnet from "./words/Mainnet";
import Marketplace from "./words/Marketplace";
import Metamask from "./words/Metamask";
import Metaverse from "./words/Metaverse";
import Mint from "./words/Mint";
import Mod from "./words/Mod";

import NonFungibleToken from "./words/NonFungibleToken";

import OpenSea from "./words/OpenSea";

import P2E from "./words/P2E";
import PaperHands from "./words/PaperHands";
import PFP from "./words/PFP";
import PreSale from "./words/PreSale";
import Provenance from "./words/PFP";
import PumpNDump from "./words/PumpNDump";

import Rarible from "./words/Rarible";
import RarityTools from "./words/RarityTools";
import Rinkeby from "./words/Rinkeby";
import Ropsten from "./words/Ropsten";
import RugPull from "./words/RugPull";

import SeedPhrase from "./words/SeedPhrase";
import SER from "./words/SER";
import SHA256 from "./words/SHA256";
import SmartContract from "./words/SmartContract";
import Solidity from "./words/Solidity";
import SweepTheFloor from "./words/SweepTheFloor";

import Testnet from "./words/Testnet";
import Tezos from "./words/Tezos";

import VitalikButerin from "./words/VitalikButerin";

import Whale from "./words/Whale";

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
        <Helmet>
          <title>NFTPEDIA - Din främsta NFT källa på nätet</title>
          <meta
            name="description"
            content="På NFTPEDIA har du beskrivningar på diverse NFT begrepp som är bra att hålla koll på. Vårt mål är att vara din främsta NFT källa på nätet."
          />
        </Helmet>
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
          <Route path="/lowball-offer">
            <LowballOffer />
          </Route>
          <Route path="/mainnet">
            <Mainnet />
          </Route>
          <Route path="/marketplace">
            <Marketplace />
          </Route>
          <Route path="/metamask">
            <Metamask />
          </Route>
          <Route path="/metaverse">
            <Metaverse />
          </Route>
          <Route path="/mint">
            <Mint />
          </Route>
          <Route path="/mod">
            <Mod />
          </Route>
          <Route path="/non-fungible-token">
            <NonFungibleToken />
          </Route>
          <Route path="/open-sea">
            <OpenSea />
          </Route>
          <Route path="/p2e">
            <P2E />
          </Route>
          <Route path="/paper-hands">
            <PaperHands />
          </Route>
          <Route path="/pfp">
            <PFP />
          </Route>
          <Route path="/pre-sale">
            <PreSale />
          </Route>
          <Route path="/provenance">
            <Provenance />
          </Route>
          <Route path="/pump-n-dump">
            <PumpNDump />
          </Route>
          <Route path="/rarible">
            <Rarible />
          </Route>
          <Route path="/rarity-tools">
            <RarityTools />
          </Route>
          <Route path="/rinkeby">
            <Rinkeby />
          </Route>
          <Route path="/ropsten">
            <Ropsten />
          </Route>
          <Route path="/rug-pull">
            <RugPull />
          </Route>
          <Route path="/seed-phrase">
            <SeedPhrase />
          </Route>
          <Route path="/ser">
            <SER />
          </Route>
          <Route path="/sha-256">
            <SHA256 />
          </Route>
          <Route path="/smart-contract">
            <SmartContract />
          </Route>
          <Route path="/solidity">
            <Solidity />
          </Route>
          <Route path="/sweep-the-floor">
            <SweepTheFloor />
          </Route>
          <Route path="/testnet">
            <Testnet />
          </Route>
          <Route path="/tezos">
            <Tezos />
          </Route>
          <Route path="/vitalik-buterin">
            <VitalikButerin />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
          <Route path="/a">
            <Alphabet />
            <Dropdown />
            <A />
          </Route>
          <Route path="/b">
            <Alphabet />
            <Dropdown />
            <B />
          </Route>
          <Route path="/c">
            <Alphabet />
            <Dropdown />
            <C />
          </Route>
          <Route path="/d">
            <Alphabet />
            <Dropdown />
            <D />
          </Route>
          <Route path="/e">
            <Alphabet />
            <Dropdown />
            <E />
          </Route>
          <Route path="/f">
            <Alphabet />
            <Dropdown />
            <F />
          </Route>
          <Route path="/g">
            <Alphabet />
            <Dropdown />
            <G />
          </Route>
          <Route path="/h">
            <Alphabet />
            <Dropdown />
            <H />
          </Route>
          <Route path="/i">
            <Alphabet />
            <Dropdown />
            <I />
          </Route>
          <Route path="/j">
            <Alphabet />
            <Dropdown />
            <J />
          </Route>
          <Route path="/k">
            <Alphabet />
            <Dropdown />
            <K />
          </Route>
          <Route path="/l">
            <Alphabet />
            <Dropdown />
            <L />
          </Route>
          <Route path="/m">
            <Alphabet />
            <Dropdown />
            <M />
          </Route>
          <Route path="/n">
            <Alphabet />
            <Dropdown />
            <N />
          </Route>
          <Route path="/o">
            <Alphabet />
            <Dropdown />
            <O />
          </Route>
          <Route path="/p">
            <Alphabet />
            <Dropdown />
            <P />
          </Route>
          <Route path="/q">
            <Alphabet />
            <Dropdown />
            <Q />
          </Route>
          <Route path="/r">
            <Alphabet />
            <Dropdown />
            <R />
          </Route>
          <Route path="/s">
            <Alphabet />
            <Dropdown />
            <S />
          </Route>
          <Route path="/t">
            <Alphabet />
            <Dropdown />
            <T />
          </Route>
          <Route path="/u">
            <Alphabet />
            <Dropdown />
            <U />
          </Route>
          <Route path="/v">
            <Alphabet />
            <Dropdown />
            <V />
          </Route>
          <Route path="/w">
            <Alphabet />
            <Dropdown />
            <W />
          </Route>
          <Route path="/x">
            <Alphabet />
            <Dropdown />
            <X />
          </Route>
          <Route path="/y">
            <Alphabet />
            <Dropdown />
            <Y />
          </Route>
          <Route path="/z">
            <Alphabet />
            <Dropdown />
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
