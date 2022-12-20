import {
  CoffeeCardCatalogContainer,
  Image,
  Type,
  Description,
  BuyDetails,
  Price,
  AddToCart,
  Button,
} from './styles'
import coffeeCupCatalog from '../../assets/coffee-cup-catalog.svg'
import { ShoppingCart } from 'phosphor-react'
import { InputNumber } from '../InputNumber'
import { Coffee } from '../../interfaces/Coffee'

interface CoffeeCardCatalogProps extends Coffee {
  onChangeInputNumber: (id: string, type: 'increment' | 'decrement') => void
  onAddToCart: () => void
}

export function CoffeeCardCatalog({
  id,
  type,
  title,
  description,
  price,
  onAddToCart,
  onChangeInputNumber,
}: CoffeeCardCatalogProps) {
  function handleDecOrIncrementInputNumber(type: 'increment' | 'decrement') {
    onChangeInputNumber(id, type)
  }
  function handleChangeInputNumber(type: 'increment' | 'decrement') {
    onChangeInputNumber(id, type)
  }

  function handleAddToCart() {
    onAddToCart()
  }

  return (
    <CoffeeCardCatalogContainer>
      <Image src={coffeeCupCatalog} alt="Coffee Cup" />
      <Type>{type}</Type>
      <Description>
        <h1>{title}</h1>
        <span>{description}</span>
      </Description>
      <BuyDetails>
        <Price>
          <strong>R$ {price}</strong>
        </Price>
        <AddToCart>
          <InputNumber
            height="2.375rem"
            onChangeInputNumber={handleDecOrIncrementInputNumber}
            onChange={handleChangeInputNumber}
          />
          <Button onClick={handleAddToCart}>
            <ShoppingCart />
          </Button>
        </AddToCart>
      </BuyDetails>
    </CoffeeCardCatalogContainer>
  )
}
