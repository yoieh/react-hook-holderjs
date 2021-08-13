import React from "react";
import {
  Title,
  Text,
  Divider,
  Center,
  Col,
  Container,
  Paper,
  Group,
  Grid
} from "@mantine/core";
import { Prism } from "@mantine/prism";

import { Github } from "@uiw/react-shields";

import Example from "./Example";
import Head from "./Head";

const demoCode = `import * as React from "react";
import { useHolderjs } from "use-holderjs";

const Example = () => {
  useHolderjs();
  return (
    <div>
      <img data-src='holder.js/300x200' />
    </div>
  );
};
`;

const ExamplePage = () => {
  return (
    <div>
      <Head title='useHolder()' disableTitleTemplate />

      <Container>
        <Paper>
          <Grid>
            <Col span={12}>
              <Title order={1}>useHolder()</Title>
            </Col>

            <Col span={12}>
              <Grid>
                <Col span={12}>
                  <Text size='md'>React hook to run holderjs</Text>
                </Col>

                <Col span={12}>
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
                      <Github.Issues
                        user='yoieh'
                        repo='use-holderjs'
                        type='issues'
                      />
                    </div>

                    <div>
                      <Github.Issues
                        user='yoieh'
                        repo='use-holderjs'
                        type='issues-closed'
                      />
                    </div>

                    <div>
                      <Github.Issues
                        user='yoieh'
                        repo='use-holderjs'
                        type='issues-pr'
                      />
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
                      <Github.Size
                        user='yoieh'
                        repo='use-holderjs'
                        type='repo-size'
                      />
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
                      <Github.Social
                        user='yoieh'
                        repo='use-holderjs'
                        type='forks'
                      />
                    </div>
                    <div>
                      <Github.Social
                        user='yoieh'
                        repo='use-holderjs'
                        type='stars'
                      />
                    </div>
                    <div>
                      <Github.Social
                        user='yoieh'
                        repo='use-holderjs'
                        type='watchers'
                      />
                    </div>
                    <div>
                      <Github.Social
                        user='yoieh'
                        repo='use-holderjs'
                        type='followers'
                      />
                    </div>
                  </Group>
                </Col>
              </Grid>
            </Col>

            <Col span={12}>
              <Divider variant='solid' />
            </Col>

            <Col span={12}>
              <Title order={2}>Installation</Title>
            </Col>

            <Col span={12}>
              <Prism language='bash'>npm i use-holderjs</Prism>
            </Col>

            <Col span={12}>
              <Text> or </Text>
            </Col>

            <Col span={12}>
              <Prism language='bash'>yarn add use-holderjs</Prism>
            </Col>

            <Col span={12}>
              <Divider variant='solid' />
            </Col>

            <Col span={12}>
              <Title order={3}>Code example:</Title>
            </Col>

            <Col span={12}>
              <Center>
                <Col span={4}>
                  <Example></Example>
                </Col>
              </Center>
            </Col>

            <Col span={12}>
              <Prism language='tsx'>{demoCode}</Prism>
            </Col>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ExamplePage;
