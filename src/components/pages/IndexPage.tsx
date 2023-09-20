import * as React from "react";
import { VStack, Stack, Box, useMediaQuery } from "@chakra-ui/react";
import { WrapperPageLayout } from "../layouts/WrapperPageLayout";
import useStocksQuery from "../../hooks/useStocks";
import { StocksDataTable } from "../Stock/StocksDataTable";

interface Props {}

export const IndexPage: React.FC<Props> = ({}) => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  const { data: stocks } = useStocksQuery();

  return (
    <WrapperPageLayout>
      <VStack padding={isLargerThan1020 ? 0 : "8"}>
        <Stack direction={"column"} alignItems="center">
          <img
            src="./play_store_512.png"
            alt="Smart Stock Alert logo"
            width={256}
          />
          <Box
            as="h1"
            fontFamily={"Mulish"}
            fontWeight={"bold"}
            fontSize={"6xl"}
            textAlign={"center"}
          >
            Smart Stock Alert
          </Box>
        </Stack>

        <Box
          as="h2"
          fontFamily={"Puritan"}
          fontSize={"2xl"}
          maxWidth={612}
          textAlign={"center"}
          marginTop="2"
        >
          Get notified when your favourite stocks may be impacted because of
          news, climate, manipulation, ...
        </Box>

        <Stack
          direction={isLargerThan1020 ? "row" : "column"}
          marginTop={"8"}
          alignItems="center"
        >
          <Box
            as="a"
            href="https://apps.apple.com/us/app/smart-stock-alert/id6454791704"
          >
            <img
              src="/buttons/button-ios.png"
              alt="Download on IOS"
              height={74}
              style={{ height: 74 }}
            />
          </Box>
          <Box
            as="a"
            href="https://play.google.com/store/apps/details?id=io.smartstockalert"
          >
            <img
              src="/buttons/button-android.png"
              alt="Download on Android"
              height={73}
              style={{ height: 73 }}
            />
          </Box>
        </Stack>

        <Box
          as="h2"
          fontFamily={"Puritan"}
          fontSize={"2xl"}
          maxWidth={612}
          textAlign={"center"}
          marginTop="20"
        >
          Latest stock prices for some commonly used stocks
        </Box>

        <StocksDataTable />
      </VStack>
    </WrapperPageLayout>
  );
};
