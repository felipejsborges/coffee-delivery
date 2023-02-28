import { InputHTMLAttributes } from 'react'
import { InputNumberContainer, InputValueChanger } from './styles'
import { Minus, Plus } from '../../styles/icons'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string
  onDecreaseCoffeeQuantity: () => void
  onIncreaseCoffeeQuantity: () => void
}

export function InputNumber({
  height,
  onDecreaseCoffeeQuantity,
  onIncreaseCoffeeQuantity,
  ...props
}: InputNumberProps) {
  return (
    <InputNumberContainer height={height}>
      <InputValueChanger onClick={onDecreaseCoffeeQuantity}>
        <Minus />
      </InputValueChanger>
      <input type="number" min={0} max={99} {...props} />
      <InputValueChanger onClick={onIncreaseCoffeeQuantity}>
        <Plus />
      </InputValueChanger>
    </InputNumberContainer>
  )
}
