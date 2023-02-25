import { InputHTMLAttributes } from 'react'
import { InputNumberContainer, InputValueChanger } from './styles'
import { Minus, Plus } from '../../styles/icons'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string
  onChangeInputNumber: (type: 'increment' | 'decrement') => void
}

export function InputNumber({
  height,
  onChangeInputNumber,
  ...props
}: InputNumberProps) {
  function handleDecrementValue() {
    onChangeInputNumber('decrement')
  }

  function handleIncrement() {
    onChangeInputNumber('increment')
  }

  return (
    <InputNumberContainer height={height}>
      <InputValueChanger onClick={handleDecrementValue}>
        <Minus />
      </InputValueChanger>
      <input type="number" defaultValue={0} min={0} max={99} {...props} />
      <InputValueChanger onClick={handleIncrement}>
        <Plus />
      </InputValueChanger>
    </InputNumberContainer>
  )
}
