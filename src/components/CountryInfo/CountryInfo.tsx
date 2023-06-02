import { Link } from 'react-router-dom'
import { ArrowLeft as ArrowLeftIcon } from '@styled-icons/bootstrap'
import { Country } from '../../types/country'
import * as S from './styles'

export type CountryInfoProps = {
  country: Country
}

const CountryInfo = ({ country }: CountryInfoProps) => {
  return (
    <S.WrapperCardInfo>
      <Link to="/" aria-label="back to home">
        <ArrowLeftIcon size={20} color="#3a3845" />
      </Link>

      <h1>
        {country.name} {country.emoji}
      </h1>

      <span>
        <h2>Official language:</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </span>

      {!!country.states?.length && (
        <>
          <h2>States</h2>
          <ul>
            {country.states.map((state) => (
              <li key={state.name}>{state.name}</li>
            ))}
          </ul>
        </>
      )}
    </S.WrapperCardInfo>
  )
}

export default CountryInfo
