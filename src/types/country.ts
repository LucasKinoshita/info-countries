type LanguagesProps = {
  name: string
}

type StatesProps = {
  name: string
}

export type Country = {
  name: string
  emoji: string
  code: string
  languages: LanguagesProps[]
  states: StatesProps[]
}
