import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ContactPage } from "./components/pages/ContactPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { IndexPage } from "./components/pages/IndexPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
      networkMode: "offlineFirst",
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      networkMode: "offlineFirst",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          {/* <Route path="/auth" element={<AuthPage />} /> */}

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
);
