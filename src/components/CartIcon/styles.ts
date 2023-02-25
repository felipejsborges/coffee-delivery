import styled from 'styled-components'

export const CartIconContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.yellowLight};
  border-radius: 0.375rem;
  position: relative;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme.yellowDark};
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: -0.5rem;
  top: -0.5rem;
  background: ${(props) => props.theme.yellowDark};
  border-radius: 50%;
  z-index: 1;

  span {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`
