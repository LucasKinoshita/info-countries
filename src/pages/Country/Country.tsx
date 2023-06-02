import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_COUNTRY_QUERY } from '../../lib/queries/getCountry'
import { Country } from '../../types/country'
import { CountryInfo } from '../../components/CountryInfo'
import * as S from './styles'

export type CountryPageProps = {
  country: Country
}

const CountryPage = () => {
  const { code } = useParams<{ code: string }>()

  const { data, loading } = useQuery<CountryPageProps>(GET_COUNTRY_QUERY, {
    variables: { code: code }
  })

  if (loading) return <S.Loading>Carregando...</S.Loading>

  return <CountryInfo country={data!.country} />
}

export default CountryPage
