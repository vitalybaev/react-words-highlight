import * as React from 'react'
import highlightWords from 'highlight-words'

interface Props {
  text: string
  query: string
  matchExactly?: boolean
  highlightClassName?: string
  highlightTag?: React.ElementType
}

const WordsHighlight = ({
  text,
  query,
  matchExactly,
  highlightTag = 'mark',
  highlightClassName
}: Props): React.ReactElement => {
  const chunks = highlightWords({ text, query, matchExactly })

  return (
    <>
      {chunks.map((chunk) => {
        if (!chunk.match) {
          return <span key={chunk.key}>{chunk.text}</span>
        }

        const Tag = highlightTag

        return (
          <Tag key={chunk.key} className={highlightClassName}>
            {chunk.text}
          </Tag>
        )
      })}
    </>
  )
}

WordsHighlight.displayName = 'WordsHighlight'

export { WordsHighlight }
