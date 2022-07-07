import { useQuery } from '@apollo/client'
import { GET_COUNTRIES_QUERY } from 'lib/queries/getCountries'
import { CountryCard } from 'components/CountryCard'
import * as S from './styles'
import { Countries } from 'types/country'

const CountryCards = () => {
  const { data } = useQuery<Countries>(GET_COUNTRIES_QUERY)

  return (
    <S.WrapperCards>
      {data?.countries.map((countrie) => (
        <CountryCard
          key={countrie.name}
          name={countrie.name}
          code={countrie.code}
          emoji={countrie.emoji}
        />
      ))}
    </S.WrapperCards>
  )
}

export default CountryCards
