import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CountryCard } from '.'

describe('<CountryCard />', () => {
  it('should render the component', () => {
    render(
      <Router>
        <CountryCard name="Brazil" code="BR" emoji="🇧🇷" />
      </Router>
    )

    expect(screen.getByText(/brazil/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/card/BR')
    expect(screen.getByText(/🇧🇷/i)).toBeInTheDocument()
  })
})
