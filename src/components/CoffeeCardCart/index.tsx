import {
  CoffeeCardCartContainer,
  Image,
  TitleAndQuantity,
  Price,
  Quantity,
  RemoveButton,
  Intro,
} from './styles'
import coffeeCupCatalog from '../../assets/coffee-cup-catalog.svg'
import { InputNumber } from '../InputNumber'
import { Trash } from 'phosphor-react'

export function CoffeeCardCart() {
  return (
    <CoffeeCardCartContainer>
      <Intro>
        <Image src={coffeeCupCatalog} alt="Coffee Cup" />
        <TitleAndQuantity>
          <h1>Expresso Tradicional</h1>
          <Quantity>
            <InputNumber />
            <RemoveButton>
              <Trash />
              <span>Remover</span>
            </RemoveButton>
          </Quantity>
        </TitleAndQuantity>
      </Intro>
      <Price>
        <span>R$ 9,90</span>
      </Price>
    </CoffeeCardCartContainer>
  )
}
