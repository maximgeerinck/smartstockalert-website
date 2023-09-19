import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { WrapperPageLayout } from "../layouts/WrapperPageLayout";

interface Props {}

export const ContactPage: React.FC<Props> = ({}) => {
  return (
    <WrapperPageLayout>
      <VStack alignItems={"flex-start"}>
        <Box as="h1" fontSize={"4xl"} marginTop="4">
          FAQ
        </Box>
        <Box as="h3" fontWeight={"bold"}>
          What alarms are currently supported?
        </Box>
        <p>At this moment we offer the following alarms:</p>
        <ul>
          <li>
            Price above: Notifies you when a price exceeds your set threshold
          </li>
          <li>
            Price below: Notifies you when a price dips below your set threshold
          </li>
          <li>
            Smart: Notifies you when our smart system detects that a price might
            be impacted
          </li>
        </ul>
        <Box as="h3" fontWeight={"bold"} marginTop={8}>
          What is a SMART alarm?
        </Box>
        <p>
          Our scan algorithm is propietary but includes some of the following
          sources for detecting price swings:
        </p>
        <ul>
          <li>Different news sources with the latest news about a stock</li>
          <li>
            Scans sentiment from different sources about a stock. Will only
            return positive impacts
          </li>
        </ul>
        <p>
          <strong>NOTE</strong>: We are not responsible for any damages or
          losses incurred from acting up on these alarms
        </p>
        <Box as="h3" fontWeight={"bold"} marginTop={8}>
          Will you support more alarms in the future?
        </Box>
        <p>
          We're constantly updating our alarms and systems. Have suggestions?
          Please let us know through the feedback section in the app or the
          contact email below
        </p>
      </VStack>
      <VStack alignItems={"flex-start"} marginLeft={-4}>
        <Box as="h3" fontWeight={"bold"} marginTop={8}>
          Contact
        </Box>
        <p>
          Get in touch with us! Please send us an email at{" "}
          <a href="mailto:hi@smartstockalert.io">hi@smartstockalert.io</a> with
          any questions and we'll get back to you as soon as possible.
        </p>
      </VStack>
    </WrapperPageLayout>
  );
};
