import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useMemo } from 'react'
import { DetailsItemTypes } from './interfaces'
import {
  DetailsItemContainer,
  DetailsItemContent,
  IconContainer,
} from './styles'

interface DetailsItemProps {
  type: DetailsItemTypes
}

export function DetailsItem({ type }: DetailsItemProps) {
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

  const content = useMemo(() => {
    switch (type) {
      case 'address':
        return 'Rua João Daniel Martinelli, 102. Farrapos - Porto Alegre, RS'
      case 'delivery':
        return '20 min - 30 min'
      case 'payment':
        return 'Cartão de Crédito'
    }
  }, [type])

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
