import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { mock } from './mock'
import { HomePage } from '.'

describe('<HomePage />', () => {
  it('should render the page', async () => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Router>
          <HomePage />
        </Router>
      </MockedProvider>
    )

    expect(await screen.findByText(/brazil/i)).toBeInTheDocument()
    expect(await screen.findByText(/🇧🇷/i)).toBeInTheDocument()

    expect(await screen.findByText(/spain/i)).toBeInTheDocument()
    expect(await screen.findByText(/🇪🇸/i)).toBeInTheDocument()
  })
})
