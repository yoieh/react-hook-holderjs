import * as React from 'react';
import holderjs from "holderjs";

export const useHolderjs = () => {
  React.useEffect(() => {
    holderjs.run();
  }, []);

  return;
};