import { HTMLAttributes } from 'react'
import { RemoveButtonContainer } from './styles'
import { Trash } from '../../styles/icons'

interface RemoveButtonProps extends HTMLAttributes<HTMLButtonElement> { }

export function RemoveButton({ ...props }: RemoveButtonProps) {
  return (
    <RemoveButtonContainer {...props}>
      <Trash />
      <span>Remover</span>
    </RemoveButtonContainer>
  )
}
