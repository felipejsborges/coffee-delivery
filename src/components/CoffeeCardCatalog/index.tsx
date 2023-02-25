import {
  CoffeeCardCatalogContainer,
  Image,
  Tags,
  Tag,
  Description,
  BuyDetails,
  Price,
  Actions,
} from './styles'
import coffeeCupCatalog from '../../assets/coffee-cup-catalog.svg'
import { InputNumber } from '../InputNumber'
import { Coffee } from '../../interfaces/coffee'
import { useApp } from '../../contexts/app'
import { CartButton } from '../CartButton'

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
      <Tags>
        <Tag>
          <span>{type}</span>
        </Tag>
        <Tag>
          <span>{type}</span>
        </Tag>
        <Tag>
          <span>{type}</span>
        </Tag>
      </Tags>
      <Description>
        <h1>{title}</h1>
        <span>{description}</span>
      </Description>
      <BuyDetails>
        <Price>R$ {price}</Price>
        <Actions>
          <InputNumber
            height="2.375rem"
            onChangeInputNumber={handleDecOrIncrementInputNumber}
            onChange={(e) => handleChangeInputNumber(e.target.value)}
            value={quantity}
          />
          <CartButton onClick={handleAddToCart} />
        </Actions>
      </BuyDetails>
    </CoffeeCardCatalogContainer>
  )
}
