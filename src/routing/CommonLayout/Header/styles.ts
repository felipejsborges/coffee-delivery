import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }
`

export const Logo = styled.div`
  cursor: pointer;
`

export const NavItems = styled.div`
  gap: 0.75rem;
  display: flex;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 0.375rem;
  height: 2.375rem;
`

export const LocationContainer = styled(ActionContainer)`
  background: ${(props) => props.theme.purpleLight};

  svg,
  span {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.875rem;
  }
`
