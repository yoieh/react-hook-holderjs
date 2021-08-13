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

import { Star, Fork, Watch, Sponsor /*, UsedBy*/ } from "react-github-buttons";

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

                    <Star owner='yoieh' repo='use-holderjs' />
                    <Fork owner='yoieh' repo='use-holderjs' />
                    <Watch owner='yoieh' repo='use-holderjs' />
                    <Sponsor owner='yoieh' repo='use-holderjs' />
                    {/* <UsedBy owner='yoieh' repo='use-holderjs' count={0} /> */}
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
