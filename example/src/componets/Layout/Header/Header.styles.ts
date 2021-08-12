import { createUseStyles } from "react-jss";
import { theming, MantineTheme, getFocusStyles } from "@mantine/core";
// eslint-disable-next-line import/no-cycle
// import { NAVBAR_BREAKPOINT } from "../Navbar/Navbar.styles";

export const HEADER_HEIGHT = 60;
export const HEADER_BREAKPOINT = 460;

export default createUseStyles(
  (theme: MantineTheme) => ({
    header: {
      top: 0,
      left: 0,
      right: 0,
      height: HEADER_HEIGHT,
      zIndex: 6,
      position: "fixed",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },

    logo: {
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      height: HEADER_HEIGHT,
      display: "flex",
      alignItems: "center"
    },

    mainSection: {
      [`@media (max-width: ${/*NAVBAR_BREAKPOINT*/ 0}px)`]: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }
    },

    logoWrapper: {
      display: "flex",
      alignItems: "center"
    },

    version: {
      ...getFocusStyles(theme),
      fontWeight: 700,
      textDecoration: "none"
    }
  }),
  { theming }
);
