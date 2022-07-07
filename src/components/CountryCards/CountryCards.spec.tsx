import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { mock } from './mock'
import { CountryCards } from '.'

describe('<CountryCards />', () => {
  it('should render the component', async () => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Router>
          <CountryCards />
        </Router>
      </MockedProvider>
    )

    expect(await screen.findByText(/brazil/i)).toBeInTheDocument()
    expect(await screen.findByText(/🇧🇷/i)).toBeInTheDocument()

    expect(await screen.findByText(/spain/i)).toBeInTheDocument()
    expect(await screen.findByText(/🇪🇸/i)).toBeInTheDocument()
  })
})
