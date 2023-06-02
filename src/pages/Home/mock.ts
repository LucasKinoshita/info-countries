import { GET_COUNTRIES_QUERY } from '../../lib/queries/getCountries'

export const mock = {
  request: {
    query: GET_COUNTRIES_QUERY
  },
  result: {
    data: {
      countries: [
        {
          code: 'BR',
          emoji: '🇧🇷',
          name: 'Brazil'
        },
        {
          code: 'ES',
          emoji: '🇪🇸',
          name: 'Spain'
        }
      ]
    }
  }
}
