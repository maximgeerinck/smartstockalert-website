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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { redirect } from "react-router-dom";

export default function PrivacyPolicyPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  React.useEffect(() => {
    redirect(`io.smartstockalert://login${window.location.search}`);
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
              <Row className="row-grid justify-content-between align-items-center text-left">
                Redirecting...
              </Row>
            </Container>
          </section>
        </section>
      </div>
    </>
  );
}
