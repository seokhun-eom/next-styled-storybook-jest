"use client";

import { theme } from "@/_theme";
import { ThemeProvider } from "styled-components";

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
