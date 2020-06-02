# react-words-highlight

> Tiny React component for highlight words in text

[![NPM](https://img.shields.io/npm/v/react-words-highlight.svg)](https://www.npmjs.com/package/react-words-highlight) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-words-highlight
```

## Usage

```tsx
import React, { Component } from 'react'

import { WordsHighlight } from 'react-words-highlight'

class Example extends Component {
  render() {
    return (
      <WordsHighlight
        text="Some text to highlight"
        query="text highlight"
        highlightTag="strong"
        highlightClassName="my-class"
      />
    );
  }
}
```

## License

MIT © [vitalybaev](https://github.com/vitalybaev)
