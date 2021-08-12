import { Title } from "@mantine/core";
import React from "react";
// import { Code } from "@mantine/core";
import useStyles from "./Header.styles";
// import corePackageJson from "../../../../package.json";
import GitHubForkRibbon from "react-github-fork-ribbon";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <GitHubForkRibbon
        href='//github.com/yoieh/use-holderjs'
        target='_blank'
        color='green'
      >
        Fork me on GitHub
      </GitHubForkRibbon>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            {/* <Logo /> */}
            <Title order={3}>useHolderjs()</Title>
          </div>

          {/* <a
            href='https://github.com/yoieh/use-holderjs/releases'
            className={classes.version}
          >
            <Code>v{corePackageJson.version}</Code>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
