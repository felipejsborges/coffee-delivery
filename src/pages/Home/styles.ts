import styled from 'styled-components'

export const HomeContainer = styled.div``

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 0;
  gap: 3.5rem;
`

export const Description = styled.div`
  max-width: 40rem;
`

export const TitleContainer = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubTitle};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 1.25rem 2.5rem;
`

export const ItemContent = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface IconContainerProps {
  type: 'ShoppingCart' | 'Package' | 'Timer' | 'CoffeeIcon'
}
export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  padding: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  background: ${(props) => {
    switch (props.type) {
      case 'ShoppingCart':
        return props.theme.yellowDark
      case 'Package':
        return props.theme.baseText
      case 'Timer':
        return props.theme.yellow
      case 'CoffeeIcon':
        return props.theme.purple
      default:
        return 'transparent'
    }
  }};

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const CoffeeImage = styled.img`
  width: 100%;
  max-width: 40rem;
`

export const CoffeeListContainer = styled.div``

export const CoffeeList = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  grid-gap: 2.5rem 2rem;
`
