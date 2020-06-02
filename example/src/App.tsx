import React, { ReactNode } from 'react'

import { WordsHighlight } from 'react-words-highlight'

const App = (): ReactNode => {
  return (
    <WordsHighlight
      text="Create React Library Example 😄"
      query={'React Library'}
    />
  )
}

export default App
