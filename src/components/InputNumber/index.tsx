import { InputHTMLAttributes } from 'react'
import { InputNumberContainer, InputValueChanger } from './styles'

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
      <InputValueChanger onClick={handleDecrementValue}>-</InputValueChanger>
      <input type="number" defaultValue={0} min={0} {...props} />
      <InputValueChanger onClick={handleIncrement}>+</InputValueChanger>
    </InputNumberContainer>
  )
}
