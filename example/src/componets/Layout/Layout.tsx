import React from "react";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import { LayoutInner, LayoutProps } from "./LayoutInner";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <GlobalStyles />
      <NormalizeCSS />

      <LayoutInner>{children}</LayoutInner>
    </MantineProvider>
  );
};

export default Layout;
