import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CountryCardInfo } from 'components/CountryCardInfo'
import { Home } from 'pages/home'
import GlobalStyle from 'styles/global'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="card/:country" element={<CountryCardInfo />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
