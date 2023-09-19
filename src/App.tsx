import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ContactPage } from "./components/pages/ContactPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { IndexPage } from "./components/pages/IndexPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}

        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
