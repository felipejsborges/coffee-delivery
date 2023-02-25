import {
  CoffeeCardCartContainer,
  Image,
  Details,
  Price,
  Actions,
  Info,
} from './styles'
import coffeeCupCatalog from '../../assets/coffee-cup-catalog.svg'
import { InputNumber } from '../InputNumber'
import { RemoveButton } from '../RemoveButton'

export function CoffeeCardCart() {
  return (
    <CoffeeCardCartContainer>
      <Info>
        <Image src={coffeeCupCatalog} alt="Coffee Cup" />
        <Details>
          <span>Expresso Tradicional</span>
          <Actions>
            <InputNumber onChangeInputNumber={() => {}} />
            <RemoveButton />
          </Actions>
        </Details>
      </Info>
      <Price>
        <strong>R$ 9,90</strong>
      </Price>
    </CoffeeCardCartContainer>
  )
}
