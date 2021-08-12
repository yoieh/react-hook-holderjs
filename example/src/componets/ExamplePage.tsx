import {
  Title,
  Text,
  Divider,
  Center,
  Col,
  Container,
  Paper
} from "@mantine/core";
import { Prism } from "@mantine/prism";

import React from "react";
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
          <Title order={1}>useHolder()</Title>

          <Text size='md'>React hook to run holderjs</Text>

          <br></br>
          <Divider variant='solid' />
          <br></br>

          <Title order={2}>Installation</Title>

          <Prism language='bash'>npm i use-holderjs</Prism>
          <Text> or </Text>
          <Prism language='bash'>yarn add use-holderjs</Prism>

          <br></br>
          <Divider variant='solid' />
          <br></br>

          <Title order={3}>Code example:</Title>

          <Center>
            <Col span={4}>
              <Example></Example>
            </Col>
          </Center>

          <Prism language='tsx'>{demoCode}</Prism>
        </Paper>
      </Container>
    </div>
  );
};

export default ExamplePage;
