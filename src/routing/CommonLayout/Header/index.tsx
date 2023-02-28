import logoIcon from '../../../assets/logo.svg'
import { HeaderContainer, Logo, NavItems, LocationContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { MapPin } from '../../../styles/icons'
import { useApp } from '../../../contexts/app'
import { useMemo } from 'react'
import { CartIcon } from '../../../components/CartIcon'

export function Header() {
  const { goToCartPage, cart } = useApp()
  const navigate = useNavigate()

  const cartLength = useMemo(() => Object.keys(cart).length, [cart])

  function goToHomePage() {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <Logo onClick={goToHomePage}>
        <img src={logoIcon} alt="logo icon" />
      </Logo>
      <NavItems>
        <LocationContainer>
          <MapPin />
          <span>São José, SP</span>
        </LocationContainer>
        <CartIcon onClick={goToCartPage} quantity={cartLength} />
      </NavItems>
    </HeaderContainer>
  )
}
