# use-holderjs

> 

[![NPM](https://img.shields.io/npm/v/@yoieh/use-holderjs.svg)](https://www.npmjs.com/package/@yoieh/use-holderjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://app.travis-ci.com/yoieh/use-holderjs.svg?branch=main)](https://app.travis-ci.com/yoieh/use-holderjs)

working example: [here](https://yoieh.github.io/use-holderjs/)

## Install

```bash
npm install --save use-holderjs
```

## Usage

```tsx
import * as React from 'react'

import { useHolderjs } from 'use-holderjs'

const Example = () => {
  useHolderjs();
  return (
    <div>
      <img data-src="holder.js/300x200"/>
    </div>
  )
}
```

## License

MIT © [yoieh](https://github.com/yoieh)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
