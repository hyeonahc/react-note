import React, { useState } from 'react'
import * as S from './style.js'

const Button = () => {
  const [isClicked, setIsClicked] = useState(false)

  const onClick = () => {
    setIsClicked(!isClicked)
  }

  console.log(isClicked)

  return (
    <>
      <S.Button isClicked={isClicked} onClick={onClick}>
        {isClicked ? 'true' : 'false'}
      </S.Button>
    </>
  )
}

export default Button
