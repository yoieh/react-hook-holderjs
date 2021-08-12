import React from "react";

import { useHolderjs } from "use-holderjs";
// import "use-holderjs/dist/index.css";

const App = () => {
  useHolderjs();
  return (
    <div>
      <img data-src='holder.js/300x200' alt='holder.js' />
    </div>
  );
};

export default App;
