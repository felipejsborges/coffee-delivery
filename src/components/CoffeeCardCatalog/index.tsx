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
import { Coffee } from '../../interfaces/coffee'
import { useApp } from '../../contexts/app'

interface CoffeeCardCatalogProps extends Coffee {}

export function CoffeeCardCatalog({
  id,
  type,
  title,
  description,
  price,
  quantity,
}: CoffeeCardCatalogProps) {
  const { handleChangeCoffeeQuantity } = useApp()

  function handleDecOrIncrementInputNumber(type: 'increment' | 'decrement') {
    handleChangeCoffeeQuantity(id, type)
  }
  function handleChangeInputNumber(value: string) {
    handleChangeCoffeeQuantity(id, null, Number(value))
  }

  function handleAddToCart() {
    handleChangeCoffeeQuantity(id, 'increment')
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
            onChange={(e) => handleChangeInputNumber(e.target.value)}
            value={quantity}
          />
          <Button onClick={handleAddToCart}>
            <ShoppingCart />
          </Button>
        </AddToCart>
      </BuyDetails>
    </CoffeeCardCatalogContainer>
  )
}
