import React from "react";
import { BrowserRouter } from "react-router-dom";
// , Link, Switch, Route

import Alphabet from "./Alphabet";

export default class PageContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className="pagecontainer">
          <Alphabet />
        </section>
      </BrowserRouter>
    );
  }
}
