import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: 'https://api-ap-northeast-1.graphcms.com/v2/cjqxhy3af88o801dnxok0ru3c/master',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token') || 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTE2NjIzMzcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2pxeGh5M2FmODhvODAxZG54b2swcnUzYy9tYXN0ZXIiXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJjZGQ1ZjFjZi1lMjYzLTRlNzktOTViYi03Y2U4MjU4MTkwODIiLCJqdGkiOiJja2tkeTU2cDUydHN3MDF4c2ZqN3Q4dWtsIn0.ck6u8fN8noAMGsU-dEPYFhDOdWr_1hJA0i_DNAvQgfLCP-H8lSkC3nY1lmJk4Mr9rrYgbj4vnu_aAOMTrhjVMMoThr1_x9XpQGWmNOBWZM5oMibFV77X45xYmPrj6aPmkj0tbrHx_XHzLLB8A4M67RjKEnvVJK1R2NHSelV9ZQ_W9ho4z84wY639MoaxxPa-Cqm12VdIar9PuZ-bna1jyytm24NjMCi5UEIv7Dqs5TxIJsabyzHK4VOkUreAyLVwsCTPMZMcmmhLOilzEI2hWf_g9i8-XC6L64UQDIEANnwTm-Qnb_9kJt_vW2Zg912nVQucFN4uzxL_peQ2PyBr-cPu1hcwW6Pb5bl8gpB0f_UmrrNISykICfCxYOWaMpZybd9HIlGOdqdUjuHcuq3llDtG0EQEkh3qdfEukuI28nrbQO0-om3cRpfuwQVCiUcCUlr2pHeQ3CK3B24zNTptP58-KZ7ovmBMMEZdDSHMTPP9jCw27q8XtdmmEbXjDfLpYZ0bQldAuaD6Vierg7rGZwLO9gPJ-MZcn6GJLrewEWc7eDTpL0csMtMhE1NrsPNXquAB9HrjwgiSUdG3N50tY5DxvUA1H7M1BbWARToBa1p22L45_rMIDgCZ1xylaqo89UA8JGgMLIUhwnvayVJ5pdK_8z0bg4Tp7kML03pHVcQ';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <main className="app">
        <Home />
        <Sidebar />
      </main>
    </ApolloProvider>
  );
}

export default App;
