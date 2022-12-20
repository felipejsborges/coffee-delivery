import logoIcon from '../../../assets/logo.svg'
import {
  HeaderContainer,
  NavItems,
  LocationContainer,
  CartContainer,
} from './styles'
import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoIcon} alt="logo icon" />
      </Link>
      <NavItems>
        <LocationContainer>
          <MapPin />
          <span>São José, SP</span>
        </LocationContainer>
        <Link to="/checkout">
          <CartContainer>
            <ShoppingCart />
          </CartContainer>
        </Link>
      </NavItems>
    </HeaderContainer>
  )
}
