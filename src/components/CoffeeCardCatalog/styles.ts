import styled from 'styled-components'

export const CoffeeCardCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  height: 20rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem;
`
export const Image = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  margin-top: -1.25rem;
`
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 0.25rem;
  height: 1.25rem;
  margin-top: 0.75rem;
`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  height: 1.25rem;
  background: ${(props) => props.theme.yellowLight};
  border-radius: 6.25rem;

  span {
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 100%;
    text-transform: uppercase;
    color: ${(props) => props.theme.yellowDark};
  }
`
export const Description = styled.div`
  margin-top: 1rem;
  text-align: center;

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
    margin-top: 0.5rem;
  }
`
export const BuyDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  /* gap: 2rem; */
  gap: 0.5rem;

  margin-top: 2rem;
  /* height: 2.375rem; */
`
export const Price = styled.strong`
  color: ${(props) => props.theme.baseText};
  font-size: 1.5rem;
  line-height: 130%;
  /* text-align: right; */
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 0.5rem;
`
