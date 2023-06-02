import { gql } from '@apollo/client'

export const GET_COUNTRIES_QUERY = gql`
  query {
    countries {
      name
      code
      emoji
    }
  }
`
