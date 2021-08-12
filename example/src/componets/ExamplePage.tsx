import {
  Title,
  Text,
  Divider,
  Center,
  Col,
  Code,
  Container,
  Paper
} from "@mantine/core";
import React from "react";
import Example from "./Example";
import Head from "./Head";

const ExamplePage = () => {
  return (
    <div>
      <Head title='useHolder()' disableTitleTemplate />

      <Container>
        <Paper>
          <Title order={1}>useHolder()</Title>

          <Text size='md'>React hook to run holderjs</Text>

          <Divider variant='solid' />

          <Center>
            <Col span={4}>
              <Example></Example>
            </Col>
          </Center>

          {/* <Center> */}
          <Divider variant='solid' />

          <Text size='lg'>Code example:</Text>

          <Code block>{`import * as React from "react";

import { useHolderjs } from "use-holderjs";

const Example = () => {
  useHolderjs();
  return (
    <div>
      <img data-src='holder.js/300x200' />
    </div>
  );
};
`}</Code>
          {/* </Center> */}
        </Paper>
      </Container>
    </div>
  );
};

export default ExamplePage;
