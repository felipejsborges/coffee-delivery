import styled from 'styled-components'

export const CoffeeCardCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  background: ${(props) => props.theme.baseCard};
  /* width: 23rem; */
  height: 5rem;
`
export const Intro = styled.div`
  display: flex;
  flex-direction: row;
`

export const Image = styled.img`
  height: 4rem;
  width: 4rem;
`
export const TitleAndQuantity = styled.div`
  margin-left: 1.25rem;

  h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseSubTitle};
  }
`

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  height: 2rem;
  background: ${(props) => props.theme.baseButton};
  border-radius: 0.375rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.75rem;
    line-height: 100%;
    text-transform: uppercase;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  span {
    font-weight: 700;
    text-align: right;
  }
`
