import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WrapperCard = styled.div`
  align-items: center;
  background: #dfdfde;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 2rem;
  padding: 5rem 2rem;
  transition: background 0.1s ease-in;
  width: 30rem;

  &:hover {
    background: #f7f5f2;
  }
`
export const ContentConteiner = styled.div``

export const Flag = styled.span`
  font-size: 4rem;
`

export const Title = styled.span`
  color: #3a3845;
  font-size: 3rem;
  padding-left: 1rem;
`

export const GoToInfoButton = styled(Link)`
  svg {
    color: #3a3845;
    width: 2rem;
  }
`
