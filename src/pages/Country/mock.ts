import { GET_COUNTRY_QUERY } from '../../lib/queries/getCountry'

export const mock = {
  request: {
    query: GET_COUNTRY_QUERY
  },
  result: {
    data: {
      country: {
        emoji: '🇧🇷',
        code: 'BR',
        languages: [
          {
            name: 'Portuguese'
          }
        ],
        name: 'Brazil',
        states: [
          { name: 'Paraíba' },
          { name: 'Minas Gerais' },
          { name: 'Roraima' }
        ]
      }
    }
  }
}
