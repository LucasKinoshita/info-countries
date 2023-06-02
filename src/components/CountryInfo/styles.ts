import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  color: #3a3845;
  padding: 4rem;
  width: 100%;
`
export const BackButton = styled(Link)`
  svg {
    color: #3a3845;
    width: 3rem;
  }
`

export const Name = styled.h1`
  font-size: 4rem;
`
export const LanguagesTitle = styled.h2`
  font-size: 2rem;
`
export const LanguageListWrapper = styled.ul`
  font-size: 1.6rem;
`

export const StatesTitle = styled(LanguagesTitle)``

export const StateListWrapper = styled(LanguageListWrapper)``
