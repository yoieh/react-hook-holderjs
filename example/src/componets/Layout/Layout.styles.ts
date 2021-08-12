import { createUseStyles } from "react-jss";
import { theming, MantineTheme } from "@mantine/core";
import { HEADER_HEIGHT } from "./Header/Header.styles";

export default createUseStyles(
  (theme: MantineTheme) => ({
    main: {
      scrollMarginTop: HEADER_HEIGHT,
      flex: 1,
      // aligns page top most heading with navigation and table of contents
      paddingTop: HEADER_HEIGHT + theme.spacing.xl - 2
    },

    content: {
      minHeight: "calc(100vh - 280px)"
    }
  }),
  { theming }
);
