import { CurrencyDollar, MapPin, Timer } from '../../../styles/icons'
import { useMemo } from 'react'
import { DetailsItemTypes } from './interfaces'
import {
  DetailsItemContainer,
  DetailsItemContent,
  IconContainer,
} from './styles'
import { useApp } from '../../../contexts/app'

interface DetailsItemProps {
  type: DetailsItemTypes
}

export function DetailsItem({ type }: DetailsItemProps) {
  const { address, paymentType } = useApp()

  function Icon() {
    switch (type) {
      case 'address':
        return <MapPin />
      case 'delivery':
        return <Timer />
      case 'payment':
        return <CurrencyDollar />
    }
  }

  const label = useMemo(() => {
    switch (type) {
      case 'address':
        return 'Entrega em'
      case 'delivery':
        return 'Previsão de entrega'
      case 'payment':
        return 'Pagamento na entrega'
    }
  }, [type])

  function getPaymentTypeLabel(paymentType: string) {
    switch (paymentType) {
      case 'cash':
        return 'Dinheiro'
      case 'credit_card':
        return 'Cartão de crédito'
      case 'pix':
        return 'Pix'
    }
  }

  const content = useMemo(() => {
    switch (type) {
      case 'address':
        return `${address.street}, ${address.number}, ${address.complement}. ${address.neighborhood}. ${address.city}, ${address.state}`
      case 'delivery':
        return '20 min - 30 min'
      case 'payment':
        return getPaymentTypeLabel(paymentType)
    }
  }, [type, address, paymentType])

  return (
    <DetailsItemContainer>
      <IconContainer type={type}>
        <Icon />
      </IconContainer>
      <DetailsItemContent>
        <label>{label}</label>
        <strong>{content}</strong>
      </DetailsItemContent>
    </DetailsItemContainer>
  )
}
