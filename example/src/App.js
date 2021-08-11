import React from 'react'

import { useHolderjs } from 'react-hook-holderjs'

const App = () => {
  useHolderjs();
  return (
    <div>
      <img data-src="holder.js/300x200"/>
    </div>
  )
}
export default App
