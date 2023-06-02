import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CountryInfo } from '.'

describe('<CountryInfo />', () => {
  it('should render the component', async () => {
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
