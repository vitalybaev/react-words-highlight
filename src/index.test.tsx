import React from 'react'
import { render } from '@testing-library/react'
import { WordsHighlight } from '.'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

describe('WordsHighlight', () => {
  it('is truthy', () => {
    expect(WordsHighlight).toBeTruthy()
  })

  it('renders correctly', () => {
    const { getByText } = render(<WordsHighlight text='Foo bar' query='baz' />)
    expect(getByText('Foo bar')).toBeInTheDocument()
  })

  it('renders with some query', () => {
    const { container } = render(
      <WordsHighlight text='Foo bar bar' query='bar' />
    )
    const marks = container.querySelectorAll('mark')
    expect(marks.length).toBe(2)
    expect(marks[0]).toHaveTextContent('bar')
  })

  it('renders with some several words query', () => {
    const { container } = render(
      <WordsHighlight text='Foo bar bar' query='foo bar' />
    )
    const marks = container.querySelectorAll('mark')
    expect(marks.length).toBe(3)
    expect(marks[0]).toHaveTextContent('Foo')
    expect(marks[1]).toHaveTextContent('bar')
    expect(marks[2]).toHaveTextContent('bar')
  })

  it('renders with custom tag and class name', () => {
    const { container } = render(
      <WordsHighlight
        text='Foo bar'
        query='bar'
        highlightTag='strong'
        highlightClassName='my-classname'
      />
    )
    const marks = container.querySelectorAll('mark')
    const marksStrong = container.querySelectorAll('strong')
    expect(marks.length).toBe(0)
    expect(marksStrong.length).toBe(1)
    expect(marksStrong[0]).toHaveTextContent('bar')
    expect(marksStrong[0]).toHaveAttribute('class', 'my-classname')
  })
})
