import * as React from "react";

import { useHolderjs } from "use-holderjs";

export const Example = () => {
  useHolderjs();
  return (
    <div>
      <img data-src='holder.js/300x200' alt="holderjs" />
    </div>
  );
};

export default Example;
