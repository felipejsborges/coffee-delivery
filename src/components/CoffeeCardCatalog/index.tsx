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
import { numberToReal } from '../../utils'

interface CoffeeCardCatalogProps extends Coffee {}

export function CoffeeCardCatalog({
  id,
  tags,
  title,
  description,
  price,
  quantity,
}: CoffeeCardCatalogProps) {
  const {
    onClickToDecreaseCoffeeQuantity,
    onClickToIncreaseCoffeeQuantity,
    onChangeInputQuantity,
    goToCartPage,
  } = useApp()

  return (
    <CoffeeCardCatalogContainer>
      <Image src={coffeeCupCatalog} alt="Coffee Cup" />
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={tag + index}>
            <span>{tag}</span>
          </Tag>
        ))}
      </Tags>
      <Description>
        <h1>{title}</h1>
        <span>{description}</span>
      </Description>
      <BuyDetails>
        <Price>R$ {numberToReal(price)}</Price>
        <Actions>
          <InputNumber
            height="2.375rem"
            onDecreaseCoffeeQuantity={() => onClickToDecreaseCoffeeQuantity(id)}
            onIncreaseCoffeeQuantity={() => onClickToIncreaseCoffeeQuantity(id)}
            onChange={(e) => onChangeInputQuantity(id, Number(e.target.value))}
            value={quantity || 0}
          />
          <CartButton onClick={goToCartPage} />
        </Actions>
      </BuyDetails>
    </CoffeeCardCatalogContainer>
  )
}
