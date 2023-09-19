import * as React from "react";
import {
  VStack,
  Stack,
  Box,
  useMediaQuery,
  Text,
  Container,
  SimpleGrid,
  chakra,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { CircleGradient } from "../CircleGradient";

interface Props {
  children: any;
}
const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const WrapperPageLayout: React.FC<Props> = ({ children }) => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  return (
    <VStack
      css={css`
        min-height: 100vh;

        background: linear-gradient(45deg, #01172e, #191919);
        color: white;
        position: relative;

        text-align: left;
        font-family: "Open Sans";
      `}
    >
      <VStack
        width={isLargerThan1020 ? 1020 : "100%"}
        margin={isLargerThan1020 ? "0 auto" : "4"}
      >
        <Box as="nav" width="100%">
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingY={isLargerThan1020 ? "4" : "8"}
            paddingX={isLargerThan1020 ? 0 : "8"}
          >
            <Stack direction={isLargerThan1020 ? "row" : "column"} spacing={4}>
              <Box
                as="a"
                href="/"
                fontFamily={"Mulish"}
                fontWeight={"bold"}
                fontSize={"2xl"}
              >
                Smart Stock Alert
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={4}>
              <Box as="a" href="/blog">
                Blog
              </Box>
            </Stack>
          </Stack>
        </Box>

        {children}
      </VStack>

      {/* FOOTER */}
      <Box marginTop={32} zIndex={10} position="relative" width="100%">
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        ></Box>

        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={8}
            justifyContent={"space-between"}
          >
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={"/blog"}>
                Blog
              </Box>
              <Box as="a" href={"/privacy-policy"}>
                Privacy Policy
              </Box>
              <Box as="a" href={"/contact"}>
                Contact Us
              </Box>
            </Stack>
            <Stack />
            <Stack />

            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
              <Box
                as="a"
                href="https://apps.apple.com/us/app/smart-stock-alert/id6454791704"
              >
                <img
                  src="/buttons/button-ios.png"
                  alt="Download on IOS"
                  height={40}
                  style={{ height: 40 }}
                />
              </Box>
              <Box
                as="a"
                href="https://play.google.com/store/apps/details?id=io.smartstockalert"
              >
                <img
                  src="/buttons/button-android.png"
                  alt="Download on Android"
                  height={40}
                  style={{ height: 40 }}
                />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <CircleGradient />
    </VStack>
  );
};
