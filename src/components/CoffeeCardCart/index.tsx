import {
  CoffeeCardCartContainer,
  Image,
  Details,
  Price,
  Actions,
  Info,
} from './styles'
import { InputNumber } from '../InputNumber'
import { RemoveButton } from '../RemoveButton'
import { Coffee } from '../../interfaces/coffee'
import { useApp } from '../../contexts/app'
import { numberToReal } from '../../utils'

interface CoffeeCardCartProps extends Coffee {}

export function CoffeeCardCart({
  id,
  imageUrl,
  title,
  price,
  quantity,
}: CoffeeCardCartProps) {
  const {
    onClickToDecreaseCoffeeQuantity,
    onClickToIncreaseCoffeeQuantity,
    onChangeInputQuantity,
    onClickToRemoveCoffeeFromCart,
  } = useApp()

  return (
    <CoffeeCardCartContainer>
      <Info>
        <Image src={imageUrl} alt="Coffee Cup" />
        <Details>
          <span>{title}</span>
          <Actions>
            <InputNumber
              onDecreaseCoffeeQuantity={() =>
                onClickToDecreaseCoffeeQuantity(id)
              }
              onIncreaseCoffeeQuantity={() =>
                onClickToIncreaseCoffeeQuantity(id)
              }
              onChange={(e) =>
                onChangeInputQuantity(id, Number(e.target.value))
              }
              value={quantity || 0}
            />
            <RemoveButton onClick={() => onClickToRemoveCoffeeFromCart(id)} />
          </Actions>
        </Details>
      </Info>
      <Price>
        <strong>R$ {numberToReal(price)}</strong>
      </Price>
    </CoffeeCardCartContainer>
  )
}
