import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { mock } from './mock'
import { CountryPage } from '.'

describe('<CountryPage />', () => {
  it('should render the page', async () => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Router>
          <CountryPage />
        </Router>
      </MockedProvider>
    )

    expect(await screen.findByText(/brazil/i)).toBeInTheDocument()
    expect(await screen.findByText(/🇧🇷/i)).toBeInTheDocument()

    expect(await screen.findByText(/official language:/i)).toBeInTheDocument()
    expect(await screen.findByText(/portuguese/i)).toBeInTheDocument()

    expect(await screen.findByText(/states/i)).toBeInTheDocument()
    expect(await screen.findByText(/paraíba/i)).toBeInTheDocument()
    expect(await screen.findByText(/minas gerais/i)).toBeInTheDocument()
    expect(await screen.findByText(/roraima/i)).toBeInTheDocument()
  })
})
