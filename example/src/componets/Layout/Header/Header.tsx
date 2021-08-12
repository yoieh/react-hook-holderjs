import { Group, Title } from "@mantine/core";
import React from "react";
// import { Code } from "@mantine/core";
import useStyles from "./Header.styles";
// import corePackageJson from "../../../../package.json";

import GitHubButton from "react-github-button";

import "react-github-button/assets/style.css";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
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

          <Group spacing='xs'>
            <div>
              <a href='https://badge.fury.io/js/use-holderjs'>
                <img
                  src='https://badge.fury.io/js/use-holderjs.svg'
                  alt='npm version'
                  height='18'
                />
              </a>
            </div>

            <div>
              <a href='https://app.travis-ci.com/github/yoieh/use-holderjs?branch=main'>
                <img
                  src='https://app.travis-ci.com/yoieh/use-holderjs.svg?branch=main'
                  alt='build status'
                  height='18'
                />
              </a>
            </div>

            <GitHubButton
              type='stargazers'
              namespace='yoieh'
              repo='use-holderjs'
            />

            <GitHubButton
              type='watchers'
              namespace='yoieh'
              repo='use-holderjs'
            />

            <GitHubButton type='forks' namespace='yoieh' repo='use-holderjs' />
          </Group>
        </div>
      </div>
    </div>
  );
};

export default Header;
