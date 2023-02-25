import { PaymentOptionContainer, Description } from './styles'
import { CreditCard, Bank, Money } from '../../styles/icons'

interface PaymentOptionProps {
  type: 'credit_card' | 'pix' | 'cash'
  selected?: boolean
}

export function PaymentOption({ selected, type }: PaymentOptionProps) {
  function Icon() {
    switch (type) {
      case 'cash':
        return <Money />
      case 'credit_card':
        return <CreditCard />
      case 'pix':
        return <Bank />
      default:
        return <div />
    }
  }

  const description =
    type === 'cash'
      ? 'DINHEIRO'
      : type === 'credit_card'
        ? 'CARTÃO DE CRÉDITO'
        : 'PIX'

  return (
    <PaymentOptionContainer selected={selected}>
      <Icon />
      <Description>{description}</Description>
    </PaymentOptionContainer>
  )
}
