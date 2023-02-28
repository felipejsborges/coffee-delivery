import { CurrencyDollar, MapPinLine } from '../../styles/icons'
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
import { useApp } from '../../contexts/app'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { numberToReal } from '../../utils'

export function Checkout() {
  const navigate = useNavigate()

  const { address, paymentType, cart, onChangeAddress, onChangePaymentType } =
    useApp()

  function onClickOnSubmit() {
    navigate('/success')
  }

  const total = useMemo(() => {
    return Object.values(cart).reduce((acc, coffee) => {
      const price = Number((coffee.price as any).replace(',', '.'))
      return acc + price * (coffee.quantity || 0)
    }, 0)
  }, [cart])

  const delivery = 3.5

  const totalWithDelivery = useMemo(() => {
    return total + delivery
  }, [total, delivery])

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
                <Input
                  placeholder="CEP"
                  value={address.zipCode}
                  onChange={(e) => onChangeAddress('zipCode', e.target.value)}
                />
              </CEPContainer>
              <StreetContainer>
                <Input
                  placeholder="Rua"
                  value={address.street}
                  onChange={(e) => onChangeAddress('street', e.target.value)}
                />
              </StreetContainer>
              <NumberAndComplementContainer>
                <Input
                  placeholder="Número"
                  value={address.number}
                  onChange={(e) => onChangeAddress('number', e.target.value)}
                />
                <Input
                  placeholder="Complemento (Opcional)"
                  value={address.complement}
                  onChange={(e) =>
                    onChangeAddress('complement', e.target.value)
                  }
                />
              </NumberAndComplementContainer>
              <NeighborhoodCityUfContainer>
                <Input
                  placeholder="Bairro"
                  value={address.neighborhood}
                  onChange={(e) =>
                    onChangeAddress('neighborhood', e.target.value)
                  }
                />
                <Input
                  placeholder="Cidade"
                  value={address.city}
                  onChange={(e) => onChangeAddress('city', e.target.value)}
                />
                <Input
                  placeholder="UF"
                  value={address.state}
                  onChange={(e) => onChangeAddress('state', e.target.value)}
                />
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
              <PaymentOption
                type="credit_card"
                selected={paymentType === 'credit_card'}
                onClick={() => onChangePaymentType('credit_card')}
              />
              <PaymentOption
                type="cash"
                selected={paymentType === 'cash'}
                onClick={() => onChangePaymentType('cash')}
              />
              <PaymentOption
                type="pix"
                selected={paymentType === 'pix'}
                onClick={() => onChangePaymentType('pix')}
              />
            </PaymentOptions>
          </PaymentContainer>
        </ComplementContent>
      </ComplementContainer>
      <OrderDetailsContainer>
        <h1>Cafés selecionados</h1>
        <OrderDetailsContent>
          {Object.values(cart).map((coffee) => (
            <>
              <CoffeeCardCart key={coffee.id} {...coffee} />
              <Divider />
            </>
          ))}
          <Pricing>
            <PricingItem>
              <label>Total de items</label>
              <span>R$ {numberToReal(total)}</span>
            </PricingItem>
            <PricingItem>
              <label>Entrega</label>
              <span>R$ {numberToReal(delivery)}</span>
            </PricingItem>
            <PricingTotal>
              <label>Total</label>
              <span>R$ {numberToReal(totalWithDelivery)}</span>
            </PricingTotal>
            <SubmitButton onClick={onClickOnSubmit}>
              Confirmar pedido
            </SubmitButton>
          </Pricing>
        </OrderDetailsContent>
      </OrderDetailsContainer>
    </CheckoutContainer>
  )
}
