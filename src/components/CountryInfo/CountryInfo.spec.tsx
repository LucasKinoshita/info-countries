import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CountryInfo } from '.'

describe('<CountryInfo />', () => {
  it('should render the component', () => {
    render(
      <Router>
        <CountryInfo
          country={{
            name: 'brazil',
            emoji: '🇧🇷',
            code: 'BR',
            languages: [{ name: 'portuguese' }],
            states: [
              { name: 'paraíba' },
              { name: 'minas gerais' },
              { name: 'roraima' }
            ]
          }}
        />
      </Router>
    )

    expect(screen.getByRole('heading', { name: /brazil/i })).toBeInTheDocument()
    expect(screen.getByText(/🇧🇷/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /official language:/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/portuguese/i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /states/i })).toBeInTheDocument()
    expect(screen.getByText(/paraíba/i)).toBeInTheDocument()
    expect(screen.getByText(/minas gerais/i)).toBeInTheDocument()
    expect(screen.getByText(/roraima/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/back to home/i)).toHaveAttribute('href', '/')
  })
})
