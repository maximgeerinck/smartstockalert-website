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

// core components
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { redirect } from "react-router-dom";

export default function ContactPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
        </div>

        <section className="section section-lg">
          <section className="section">
            <Container>
              <h1 className="h1-seo">FAQ</h1>
              <h3 className="d-none d-sm-block">
                What alarms are currently supported?
              </h3>
              <p>At this moment we offer the following alarms:</p>
              <ul>
                <li>
                  Price above: Notifies you when a price exceeds your set
                  threshold
                </li>
                <li>
                  Price below: Notifies you when a price dips below your set
                  threshold
                </li>
                <li>
                  Smart: Notifies you when our smart system detects that a price
                  might be impacted
                </li>
              </ul>
              <h3 className="d-none d-sm-block mt-4">What is a SMART alarm?</h3>
              <p>
                Our scan algorithm is propietary but includes some of the
                following sources for detecting price swings:
              </p>
              <ul>
                <li>
                  Different news sources with the latest news about a stock
                </li>
                <li>
                  Scans sentiment from different sources about a stock. Will
                  only return positive impacts
                </li>
              </ul>
              <p>
                <strong>NOTE</strong>: We are not responsible for any damages or
                losses incurred from acting up on these alarms
              </p>
              <h3 className="d-none d-sm-block mt-4">
                Will you support more alarms in the future?
              </h3>
              <p>
                We're constantly updating our alarms and systems. Have
                suggestions? Please let us know through the feedback section in
                the app or the contact email below
              </p>
            </Container>
            <Container className="mt-lg">
              <h1 className="h1-seo">Contact</h1>
              <h3 className="d-none d-sm-block">
                Get in touch with us! Please send us an email at{" "}
                <a href="mailto:hi@smartstockalert.io">hi@smartstockalert.io</a>{" "}
                with any questions and we'll get back to you as soon as
                possible.
              </h3>
            </Container>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
