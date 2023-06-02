import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CountryPage } from './pages/Country'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="country/:code" element={<CountryPage />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
