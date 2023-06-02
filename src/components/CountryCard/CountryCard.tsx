import { InfoCircle as InfoCircleIcon } from '@styled-icons/bootstrap/InfoCircle'
import { Link } from 'react-router-dom'
import * as S from './styles'

type CountryCard = {
  name: string
  code: string
  emoji: string
}

const CountryCard = ({ name, code, emoji }: CountryCard) => {
  return (
    <S.WrapperCard>
      <S.ContentConteiner>
        <S.FlagCard>{emoji}</S.FlagCard>
        <S.TextCard>{name}</S.TextCard>
      </S.ContentConteiner>

      <Link to={`country/${code}`} aria-label="go to information">
        <InfoCircleIcon color="#3a3845" size={20} />
      </Link>
    </S.WrapperCard>
  )
}

export default CountryCard
