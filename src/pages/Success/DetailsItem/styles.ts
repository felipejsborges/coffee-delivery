import styled from 'styled-components'
import { DetailsItemTypes } from './interfaces'

export const DetailsItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.75rem;

  & + & {
    margin-top: 2rem;
  }
`

interface IconContainerProps {
  type: DetailsItemTypes
}
export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => {
    switch (props.type) {
      case 'address':
        return props.theme.purple
      case 'delivery':
        return props.theme.yellow
      case 'payment':
        return props.theme.yellowDark
    }
  }};

  svg {
    /* width: 1rem; */
    /* height: 1rem; */
    color: ${(props) => props.theme.white};
  }
`

export const DetailsItemContent = styled.div`
  display: flex;
  flex-direction: column;
`
