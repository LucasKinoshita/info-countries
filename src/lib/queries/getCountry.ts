import { gql } from '@apollo/client'

export const GET_COUNTRY_QUERY = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      emoji
      code
      states {
        name
      }
      languages {
        name
      }
    }
  }
`
