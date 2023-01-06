import { BrowserRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import './dist/index.css'
import AppRouter from './components/AppRouter'
const App = () => {
  return (
    <>
      <Helmet
        title="Supreme Clone"
        meta={[{ name: 'Supreme Clone', content: '' }]}
        link={[
          {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
          },
          {
            rel: 'stylesheet',
            href:
              'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap',
          },
        ]}
      />

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
