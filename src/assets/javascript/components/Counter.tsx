import React, { useCallback } from 'react'

type Props = {
  count: number,
  increment: (num: number) => void
}

const Counter = ({count, increment}: Props) => {
  const handleClick = useCallback(() => {
    increment(count)
  }, [count])
  return (
    <button type="button" onClick={handleClick}>
      {count}: button
    </button>
  )
}

export default Counter
