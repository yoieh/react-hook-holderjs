import React from "react";
import {
  Title,
  Text,
  Divider,
  Center,
  Col,
  Container,
  Paper,
  Grid
} from "@mantine/core";
import { Prism } from "@mantine/prism";

import Example from "./Example";
import Head from "./Head";
import { Bages } from "./Bages";

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
                  <Bages></Bages>
                </Col>
              </Grid>
            </Col>

            <Col span={12}>
              <Divider variant='solid' />
            </Col>

            <Col span={12}>
              <Title order={2}>Code example</Title>
            </Col>

            <Col span={12}>
              <Prism language='tsx'>{demoCode}</Prism>
            </Col>

            <Col span={12}>
              <Center>
                <Col span={4}>
                  <Example></Example>
                </Col>
              </Center>
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
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ExamplePage;
