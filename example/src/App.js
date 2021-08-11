import React from 'react'

import { useHolderjs } from 'react-hook-holderjs'

const App = () => {
  const example = useHolderjs()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
