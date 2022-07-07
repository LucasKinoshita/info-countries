export type Country = {
  country: {
    name: string
    emoji: string
    languages: {
      name: string
    }[]
    states: {
      name: string
    }[]
  }
}

export type Countries = {
  countries: {
    name: string
    code: string
    emoji: string
  }[]
}
