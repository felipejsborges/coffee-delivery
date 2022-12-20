import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
  gap: 5%;

  & > div {
    width: 55%;

    & + div {
      width: 40%;
    }
  }
`

const BaseContainer = styled.div`
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.baseSubTitle};
    margin-bottom: 0.75rem;
  }
`

export const ComplementContainer = styled(BaseContainer)``

export const ComplementContent = styled.div``

const CardBackground = styled.div`
  background: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  h1 {
    color: ${(props) => props.theme.baseSubTitle};
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const AddressContainer = styled(CardBackground)``

export const AddressHeader = styled(CardHeader)`
  svg {
    color: ${(props) => props.theme.yellowDark};
  }
`

export const AddressContent = styled.div``

export const CEPContainer = styled.div`
  width: 33.333333333333333%;
`

export const StreetContainer = styled.div`
  margin-top: 1rem;
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  input {
    width: 33.333333333333333%;
  }

  input + input {
    width: 70%;
  }
`

export const NeighborhoodCityUfContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const PaymentContainer = styled(CardBackground)`
  margin-top: 0.75rem;
`

export const PaymentHeader = styled(CardHeader)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const OrderDetailsContainer = styled(BaseContainer)``

export const OrderDetailsContent = styled(CardBackground)`
  border-radius: 0.375rem 2.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.baseButton};
`

export const CoffeeCardCheckout = styled.div``

export const Pricing = styled.div``

const BasePricingLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  & + & {
    margin-top: 0.75rem;
  }
`

export const PricingItem = styled(BasePricingLine)`
  label {
    font-size: 0.875rem;
  }
`

export const PricingTotal = styled(BasePricingLine)`
  label,
  span {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubTitle};
  }
`
export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  width: 100%;
  height: 2.875rem;
  background: ${(props) => props.theme.yellow};
  border-radius: 0.375rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
`
