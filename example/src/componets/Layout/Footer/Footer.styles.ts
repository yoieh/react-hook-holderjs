import { createUseStyles } from "react-jss";
import { theming, getFocusStyles } from "@mantine/core";

const FOOTER_HEIGHT = 400;
const FOOTER_HEIGHT_TABLET = 0;
const FOOTER_HEIGHT_MOBILE = 0;

export default createUseStyles(
  (theme) => ({
    spacer: {
      height: 100,// FOOTER_HEIGHT,

      "@media (max-width: 800px)": {
        height: FOOTER_HEIGHT_TABLET
      },

      "@media (max-width: 640px)": {
        height: FOOTER_HEIGHT_MOBILE
      }
    },

    wrapper: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      //   position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: FOOTER_HEIGHT,

      "@media (max-width: 800px)": {
        height: FOOTER_HEIGHT_TABLET
      },

      "@media (max-width: 640px)": {
        height: FOOTER_HEIGHT_MOBILE
      }
    },

    withNavbar: {
      paddingRight: theme.spacing.md * 2
    },

    inner: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      display: "flex",
      justifyContent: "space-between",

      "@media (max-width: 800px)": {
        flexDirection: "column"
      },

      "@media (max-width: 640px)": {
        paddingBottom: theme.spacing.md
      }
    },

    logoSection: {
      maxWidth: 300,

      "@media (max-width: 800px)": {
        marginBottom: theme.spacing.xl
      },

      "@media (max-width: 640px)": {
        marginBottom: 0
      }
    },

    description: {
      marginTop: theme.spacing.xs,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6]
    },

    afterFooter: {
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
      paddingTop: theme.spacing.md
    },

    afterFooterNote: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],

      "& a": {
        ...getFocusStyles(theme),
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[2]
            : theme.colors.gray[6]
      }
    },

    groups: {
      display: "flex",

      "@media (max-width: 640px)": {
        display: "none"
      }
    },

    feedback: {
      maxWidth: 260,
      marginLeft: 80,

      "@media (max-width: 1000px)": {
        marginLeft: 40
      }
    },

    feedbackDescription: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[6],
      marginBottom: theme.spacing.sm
    },

    social: {
      display: "flex",

      "@media (max-width: 640px)": {
        display: "block"
      }
    },

    socialButton: {
      "& + &": {
        marginLeft: theme.spacing.md
      },

      "@media (max-width: 640px)": {
        flex: 1,
        width: "100%",
        "& + &": {
          marginLeft: 0,
          marginTop: theme.spacing.md
        }
      }
    }
  }),
  { theming }
);
