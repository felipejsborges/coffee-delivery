import styled from 'styled-components'

export const CoffeeCardCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.25rem;
  gap: 2rem;
  background: ${(props) => props.theme.baseCard};
`
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 1.25rem;
  width: 16rem;
  height: 4rem;
`

export const Image = styled.img`
  height: 4rem;
  width: 4rem;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    color: ${(props) => props.theme.baseSubTitle};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.5rem;
  width: 11rem;
  height: 2rem;
`
export const Price = styled.div`
  text-align: right;
  width: 100%;

  strong {
    text-align: right;
  }
`
