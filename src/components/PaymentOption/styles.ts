import styled from 'styled-components'

interface PaymentOptionContainerProps {
  selected?: boolean
}
export const PaymentOptionContainer = styled.button<PaymentOptionContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  gap: 0.5rem;
  width: 12rem;
  border: 1px solid
    ${(props) => (props.selected ? props.theme.purple : 'transparent')};
  background: ${(props) =>
    props.selected ? props.theme.purpleLight : props.theme.baseButton};
  border-radius: 0.375rem;

  &:hover {
    background: ${(props) => props.theme.baseHover};

    span {
      color: ${(props) => props.theme.baseSubTitle};
    }
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }
`
export const Description = styled.span`
  font-size: 0.75rem;
  line-height: 100%;
  text-transform: uppercase;
`
