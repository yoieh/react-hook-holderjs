import React from "react";
import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";
import useStyles from "./Layout.styles";

export interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutInner: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />

      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>

      <Footer></Footer>
    </div>
  );
};
