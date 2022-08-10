import React, { useEffect, useRef } from 'react'

const GetElement = () => {
  const inputEl = useRef()

  useEffect(() => {
    console.log(inputEl.current)
    console.log(inputEl.current.name)
  })

  const KeyDownHandler = () => {
    console.log(inputEl.current.value)
  }

  return (
    <>
      <input
        type='text'
        name='nickname'
        ref={inputEl}
        onKeyDown={KeyDownHandler}
      />
    </>
  )
}

export default GetElement
