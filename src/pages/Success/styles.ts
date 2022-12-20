import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
`

export const Header = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.yellowDark};
  }

  span {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubTitle};
  }
`

export const Main = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 45%;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme.background};

  border: 1px solid transparent;
  background-clip: padding-box;
  border-radius: 0.375rem 2.25rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  }
`

export const ImageContainer = styled.div``

export const Image = styled.img`
  height: 18rem;
`
