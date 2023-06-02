import { InfoCircle as InfoCircleIcon } from '@styled-icons/bootstrap/InfoCircle'
import {
  ContentConteiner,
  Flag,
  GoToInfoButton,
  Title,
  WrapperCard
} from './styles'

type CountryCard = {
  code: string
  emoji: string
  name: string
}

const CountryCard = ({ code, emoji, name }: CountryCard) => {
  return (
    <WrapperCard>
      <ContentConteiner>
        <Flag>{emoji}</Flag>
        <Title>{name}</Title>
      </ContentConteiner>

      <GoToInfoButton to={`country/${code}`} aria-label="go to information">
        <InfoCircleIcon />
      </GoToInfoButton>
    </WrapperCard>
  )
}

export default CountryCard
