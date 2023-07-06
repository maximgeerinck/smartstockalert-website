/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <img
            src={process.env.PUBLIC_URL + "/play_store_512.png"}
            alt="Smart Stock Alert"
          />
          <h1 className="h1-seo">Smart Stock Alert</h1>
          <h3 className="d-none d-sm-block">
            Get notified when your favourite stocks may be impacted because of
            news, climate, manipulation, ...
          </h3>
        </div>
      </Container>
    </div>
  );
}
