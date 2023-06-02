import { Country } from '../../types/country'
import { ArrowLeft as ArrowLeftIcon } from '@styled-icons/bootstrap'
import {
  BackButton,
  LanguageListWrapper,
  LanguagesTitle,
  StateListWrapper,
  StatesTitle,
  Name,
  Wrapper
} from './styles'

export type CountryInfoProps = {
  country: Country
}

const CountryInfo = ({ country }: CountryInfoProps) => {
  return (
    <Wrapper>
      <BackButton to="/" aria-label="back to home">
        <ArrowLeftIcon />
      </BackButton>

      <Name>
        {country.name} {country.emoji}
      </Name>

      <LanguagesTitle>Official language:</LanguagesTitle>

      <LanguageListWrapper>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </LanguageListWrapper>

      {!!country.states?.length && (
        <>
          <StatesTitle>States</StatesTitle>
          <StateListWrapper>
            {country.states.map((state) => (
              <li key={state.name}>{state.name}</li>
            ))}
          </StateListWrapper>
        </>
      )}
    </Wrapper>
  )
}

export default CountryInfo
