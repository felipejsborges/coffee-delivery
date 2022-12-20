import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import { Input } from '../../components/Input'
import { PaymentOption } from '../../components/PaymentOption'
import {
  CheckoutContainer,
  ComplementContainer,
  ComplementContent,
  AddressContainer,
  AddressHeader,
  AddressContent,
  PaymentContainer,
  PaymentHeader,
  PaymentOptions,
  OrderDetailsContainer,
  Pricing,
  CEPContainer,
  StreetContainer,
  NumberAndComplementContainer,
  NeighborhoodCityUfContainer,
  SubmitButton,
  OrderDetailsContent,
  Divider,
  PricingItem,
  PricingTotal,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <ComplementContainer>
        <h1>Complete seu pedido</h1>
        <ComplementContent>
          <AddressContainer>
            <AddressHeader>
              <div>
                <MapPinLine />
              </div>
              <div>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressHeader>
            <AddressContent>
              <CEPContainer>
                <Input placeholder="CEP" />
              </CEPContainer>
              <StreetContainer>
                <Input placeholder="Rua" />
              </StreetContainer>
              <NumberAndComplementContainer>
                <Input placeholder="Número" />
                <Input placeholder="Complemento (Opcional)" />
              </NumberAndComplementContainer>
              <NeighborhoodCityUfContainer>
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" />
              </NeighborhoodCityUfContainer>
            </AddressContent>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeader>
              <div>
                <CurrencyDollar />
              </div>
              <div>
                <h1>Pagamento</h1>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentHeader>
            <PaymentOptions>
              <PaymentOption type="credit_card" selected />
              <PaymentOption type="cash" />
              <PaymentOption type="pix" />
            </PaymentOptions>
          </PaymentContainer>
        </ComplementContent>
      </ComplementContainer>
      <OrderDetailsContainer>
        <h1>Cafés selecionados</h1>
        <OrderDetailsContent>
          <CoffeeCardCart />
          <Divider />
          <CoffeeCardCart />
          <Divider />
          <Pricing>
            <PricingItem>
              <label>Total de items</label>
              <span>R$ 29,70</span>
            </PricingItem>
            <PricingItem>
              <label>Entrega</label>
              <span>R$ 3,50</span>
            </PricingItem>
            <PricingTotal>
              <label>Total</label>
              <span>R$ 33,20</span>
            </PricingTotal>
            <SubmitButton> Confirmar pedido</SubmitButton>
          </Pricing>
        </OrderDetailsContent>
      </OrderDetailsContainer>
    </CheckoutContainer>
  )
}
