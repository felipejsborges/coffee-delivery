import { HTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
}

export function Button({ label, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{label}</ButtonContainer>
}
