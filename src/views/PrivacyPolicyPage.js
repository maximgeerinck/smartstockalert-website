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

export default function PrivacyPolicyPage() {
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
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col>
                  <h1>Privacy Policy for Smart Stock Alert</h1>

                  <p>
                    At Smart Stock Alert, accessible from smartstockalert.io,
                    one of our main priorities is the privacy of our visitors.
                    This Privacy Policy document contains types of information
                    that is collected and recorded by Smart Stock Alert and how
                    we use it.
                  </p>

                  <p>
                    If you have additional questions or require more information
                    about our Privacy Policy, do not hesitate to contact us.
                  </p>

                  <p>
                    This Privacy Policy applies only to our online activities
                    and is valid for visitors to our website with regards to the
                    information that they shared and/or collect in Smart Stock
                    Alert. This policy is not applicable to any information
                    collected offline or via channels other than this website.
                  </p>

                  <h2>Consent</h2>

                  <p>
                    By using our website, you hereby consent to our Privacy
                    Policy and agree to its terms.
                  </p>

                  <h2>Information we collect</h2>

                  <p>
                    The personal information that you are asked to provide, and
                    the reasons why you are asked to provide it, will be made
                    clear to you at the point we ask you to provide your
                    personal information.
                  </p>
                  <p>
                    If you contact us directly, we may receive additional
                    information about you such as your name, email address,
                    phone number, the contents of the message and/or attachments
                    you may send us, and any other information you may choose to
                    provide.
                  </p>
                  <p>
                    When you register for an Account, we may ask for your
                    contact information, including items such as name, company
                    name, address, email address, and telephone number.
                  </p>

                  <h2>How we use your information</h2>

                  <p>
                    We use the information we collect in various ways, including
                    to:
                  </p>

                  <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>
                      Develop new products, services, features, and
                      functionality
                    </li>
                    <li>
                      Communicate with you, either directly or through one of
                      our partners, including for customer service, to provide
                      you with updates and other information relating to the
                      website, and for marketing and promotional purposes
                    </li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                  </ul>

                  <h2>Log Files</h2>

                  <p>
                    Smart Stock Alert follows a standard procedure of using log
                    files. These files log visitors when they visit websites.
                    All hosting companies do this and a part of hosting
                    services' analytics. The information collected by log files
                    include internet protocol (IP) addresses, browser type,
                    Internet Service Provider (ISP), date and time stamp,
                    referring/exit pages, and possibly the number of clicks.
                    These are not linked to any information that is personally
                    identifiable. The purpose of the information is for
                    analyzing trends, administering the site, tracking users'
                    movement on the website, and gathering demographic
                    information.
                  </p>

                  <h2>Advertising Partners Privacy Policies</h2>

                  <p>
                    You may consult this list to find the Privacy Policy for
                    each of the advertising partners of Smart Stock Alert.
                  </p>

                  <p>
                    Third-party ad servers or ad networks uses technologies like
                    cookies, JavaScript, or Web Beacons that are used in their
                    respective advertisements and links that appear on Smart
                    Stock Alert, which are sent directly to users' browser. They
                    automatically receive your IP address when this occurs.
                    These technologies are used to measure the effectiveness of
                    their advertising campaigns and/or to personalize the
                    advertising content that you see on websites that you visit.
                  </p>

                  <p>
                    Note that Smart Stock Alert has no access to or control over
                    these cookies that are used by third-party advertisers.
                  </p>

                  <h2>Third Party Privacy Policies</h2>

                  <p>
                    Smart Stock Alert's Privacy Policy does not apply to other
                    advertisers or websites. Thus, we are advising you to
                    consult the respective Privacy Policies of these third-party
                    ad servers for more detailed information. It may include
                    their practices and instructions about how to opt-out of
                    certain options.{" "}
                  </p>

                  <p>
                    You can choose to disable cookies through your individual
                    browser options. To know more detailed information about
                    cookie management with specific web browsers, it can be
                    found at the browsers' respective websites.
                  </p>

                  <h2>
                    CCPA Privacy Rights (Do Not Sell My Personal Information)
                  </h2>

                  <p>
                    Under the CCPA, among other rights, California consumers
                    have the right to:
                  </p>
                  <p>
                    Request that a business that collects a consumer's personal
                    data disclose the categories and specific pieces of personal
                    data that a business has collected about consumers.
                  </p>
                  <p>
                    Request that a business delete any personal data about the
                    consumer that a business has collected.
                  </p>
                  <p>
                    Request that a business that sells a consumer's personal
                    data, not sell the consumer's personal data.
                  </p>
                  <p>
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>

                  <h2>GDPR Data Protection Rights</h2>

                  <p>
                    We would like to make sure you are fully aware of all of
                    your data protection rights. Every user is entitled to the
                    following:
                  </p>
                  <p>
                    The right to access – You have the right to request copies
                    of your personal data. We may charge you a small fee for
                    this service.
                  </p>
                  <p>
                    The right to rectification – You have the right to request
                    that we correct any information you believe is inaccurate.
                    You also have the right to request that we complete the
                    information you believe is incomplete.
                  </p>
                  <p>
                    The right to erasure – You have the right to request that we
                    erase your personal data, under certain conditions.
                  </p>
                  <p>
                    The right to restrict processing – You have the right to
                    request that we restrict the processing of your personal
                    data, under certain conditions.
                  </p>
                  <p>
                    The right to object to processing – You have the right to
                    object to our processing of your personal data, under
                    certain conditions.
                  </p>
                  <p>
                    The right to data portability – You have the right to
                    request that we transfer the data that we have collected to
                    another organization, or directly to you, under certain
                    conditions.
                  </p>
                  <p>
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>

                  <h2>Children's Information</h2>

                  <p>
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to observe, participate in, and/or monitor and
                    guide their online activity.
                  </p>

                  <p>
                    Smart Stock Alert does not knowingly collect any Personal
                    Identifiable Information from children under the age of 13.
                    If you think that your child provided this kind of
                    information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>

                  <h2>Changes to This Privacy Policy</h2>

                  <p>
                    We may update our Privacy Policy from time to time. Thus, we
                    advise you to review this page periodically for any changes.
                    We will notify you of any changes by posting the new Privacy
                    Policy on this page. These changes are effective
                    immediately, after they are posted on this page.
                  </p>

                  <h2>Contact Us</h2>

                  <p>
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to contact us.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
}
