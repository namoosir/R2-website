import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Header from './components/header'
import Home from './components/HomePage'
import Mouse from './components/mouse'
import { MouseProvider } from './contexts/MouseContext'

function App () {
  return (
    <MouseProvider>
      <Mouse />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MouseProvider>
  )
}

export default App
