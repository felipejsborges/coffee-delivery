import { HTMLAttributes } from 'react'
import { CartButtonContainer } from './styles'
import { ShoppingCart } from '../../styles/icons'

interface CartButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function CartButton({ ...props }: CartButtonProps) {
  return (
    <CartButtonContainer {...props}>
      <ShoppingCart />
    </CartButtonContainer>
  )
}
