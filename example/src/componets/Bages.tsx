import React from "react";
import { Group } from "@mantine/core";

import { Github } from "@uiw/react-shields";

export const Bages = () => {
  return (
    <Group spacing='xs'>
      <div>
        <a href='https://www.npmjs.com/package/use-holderjs'>
          <img
            src='https://img.shields.io/npm/v/use-holderjs.svg'
            alt='npm version'
            height='20'
          />
        </a>
      </div>

      <div>
        <a href='https://app.travis-ci.com/github/yoieh/use-holderjs?branch=main'>
          <img
            src='https://app.travis-ci.com/yoieh/use-holderjs.svg?branch=main'
            alt='build status'
            height='20'
          />
        </a>
      </div>
      
      <div>
        <Github.License user='yoieh' repo='use-holderjs' />
      </div>

      <div>
        <Github.Version user='yoieh' repo='use-holderjs' type='version-tag' />
      </div>

      <div>
        <Github.Issues user='yoieh' repo='use-holderjs' type='issues' />
      </div>

      <div>
        <Github.Issues user='yoieh' repo='use-holderjs' type='issues-closed' />
      </div>

      <div>
        <Github.Issues user='yoieh' repo='use-holderjs' type='issues-pr' />
      </div>

      <div>
        <Github.Issues
          user='yoieh'
          repo='use-holderjs'
          type='issues-pr-closed'
        />
      </div>

      <div>
        <Github.Size user='yoieh' repo='use-holderjs' />
      </div>

      <div>
        <Github.Size user='yoieh' repo='use-holderjs' type='repo-size' />
      </div>

      <div>
        <Github.Analysis
          user='yoieh'
          repo='use-holderjs'
          type='languages-top'
        />
      </div>

      <div>
        <Github.Analysis
          user='yoieh'
          repo='use-holderjs'
          type='languages-count'
        />
      </div>

      <div>
        <Github.Social user='yoieh' repo='use-holderjs' type='forks' />
      </div>
      <div>
        <Github.Social user='yoieh' repo='use-holderjs' type='stars' />
      </div>
      <div>
        <Github.Social user='yoieh' repo='use-holderjs' type='watchers' />
      </div>
      <div>
        <Github.Social user='yoieh' repo='use-holderjs' type='followers' />
      </div>
    </Group>
  );
};
