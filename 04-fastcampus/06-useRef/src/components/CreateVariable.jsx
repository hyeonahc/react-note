import React, { useRef } from 'react'

const CreateVariable = () => {
  let count = useRef(0)

  const onClickHandler = () => {
    count.current = count.current + 1
    console.log(count.current)
  }

  return (
    <>
      <p>{count.current}</p>
      <button onClick={onClickHandler}>+ 1</button>
    </>
  )
}

export default CreateVariable
