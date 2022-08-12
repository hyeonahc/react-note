import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
	from {
		opacity: 0
	}
	to {
		opacity: 1
	}
`

export const Button = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  outline: none;
  border: none;
  background-color: ${({ isClicked }) => (isClicked ? 'green' : 'grey')};
  border-radius: 10px;
  color: white;
  margin: 10px;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  cursor: pointer;
  font-family: 'BlackHanSans';
`
