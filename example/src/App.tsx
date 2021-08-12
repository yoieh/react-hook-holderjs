import React from "react";
// import { Container } from "@mantine/core";
import Layout from "./componets/Layout/Layout";

import ExamplePage from "./componets/ExamplePage";

// import "use-holderjs/dist/index.css";

const App = () => {
  return (
    <Layout>
      <ExamplePage></ExamplePage>
    </Layout>
  );
};

export default App;
