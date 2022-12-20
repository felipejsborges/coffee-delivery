import styled from 'styled-components'

export const CoffeeCardCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  height: 19.5rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.5rem 1.25rem;
`
export const Image = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  margin-top: -1.25rem;
`
export const Type = styled.div`
  text-align: center;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme.yellowLight};
  border-radius: 6.25rem;
  width: fit-content;
  margin-top: 0.75rem;
`
export const Description = styled.div`
  margin-top: 1rem;
  text-align: center;
  height: 5rem;
  overflow-y: scroll;
  border: 1px solid ${(props) => props.theme.baseHover};
  border-radius: 0.5rem;
  padding: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseSubTitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
  }
`
export const BuyDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.375rem;
  justify-content: space-between;
  gap: 0.5rem;
`
export const Price = styled.div`
  color: ${(props) => props.theme.baseText};

  strong {
    font-weight: 700;
    line-height: 130%;
    font-size: 1.5rem;
  }
`
export const AddToCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.purpleDark};
  border-radius: 0.375rem;
  width: 2.375rem;
  height: 2.375rem;

  svg {
    color: ${(props) => props.theme.baseCard};
    width: 100%;
    height: 100%;
  }
`
