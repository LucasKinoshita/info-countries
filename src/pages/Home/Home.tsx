import { useQuery } from '@apollo/client'
import { GET_COUNTRIES_QUERY } from '../../lib/queries/getCountries'
import { CountryCard } from '../../components/CountryCard'
import { Country } from '../../types/country'
import * as S from './styles'

type HomePageProps = {
  countries: Pick<Country, 'name' | 'emoji' | 'code'>[]
}

const HomePage = () => {
  const { data, loading } = useQuery<HomePageProps>(GET_COUNTRIES_QUERY)

  if (loading) return <S.Loading>Loading...</S.Loading>

  return (
    <S.Wrapper>
      {data?.countries.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          code={country.code}
          emoji={country.emoji}
        />
      ))}
    </S.Wrapper>
  )
}

export default HomePage
