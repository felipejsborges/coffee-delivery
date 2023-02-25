import { HTMLAttributes } from 'react'
import { CartIconContainer, QuantityContainer } from './styles'
import { ShoppingCart } from '../../styles/icons'

interface CartIconProps extends HTMLAttributes<HTMLButtonElement> {
  quantity: number
}

export function CartIcon({ quantity, ...props }: CartIconProps) {
  return (
    <CartIconContainer {...props}>
      <ShoppingCart />
      {!!quantity && (
        <QuantityContainer>
          <span>{quantity}</span>
        </QuantityContainer>
      )}
    </CartIconContainer>
  )
}
