import { useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import { GET_COUNTRY_QUERY } from 'lib/queries/getCountry'
import { ArrowLeft as ArrowLeftIcon } from '@styled-icons/bootstrap'
import { Country } from 'types/country'
import * as S from './styles'

const CountryCardInfo = () => {
  const { country } = useParams<{ country: string }>()

  const { data, loading } = useQuery<Country>(GET_COUNTRY_QUERY, {
    variables: { code: country }
  })

  if (loading) {
    return <p style={{ padding: '50px' }}>Carregando...</p>
  }

  return (
    <S.WrapperCardInfo>
      <Link to="/">
        <ArrowLeftIcon size={20} color="#3a3845" />
      </Link>

      <h1>
        {data?.country.name} {data?.country.emoji}
      </h1>

      <span>
        Official language:
        <ul>
          {data?.country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </span>

      <h2>States</h2>
      <ul>
        {data?.country.states.map((state) => (
          <li key={state.name}>{state.name}</li>
        ))}
      </ul>
    </S.WrapperCardInfo>
  )
}

export default CountryCardInfo
