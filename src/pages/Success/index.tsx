import { DetailsItem } from './DetailsItem'
import {
  Main,
  Header,
  SuccessContainer,
  Details,
  Image,
  ImageContainer,
} from './styles'
import successImg from '../../assets/success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <Header>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Header>
      <Main>
        <Details>
          <DetailsItem type="address" />
          <DetailsItem type="delivery" />
          <DetailsItem type="payment" />
        </Details>
        <ImageContainer>
          <Image src={successImg} alt="A man in a motorcycle with a box" />
        </ImageContainer>
      </Main>
    </SuccessContainer>
  )
}
