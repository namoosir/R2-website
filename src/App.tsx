import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Header from './components/header'
import Home from './components/HomePage';
import Mouse from "./components/mouse";

function App() {
  return (
    <>
      <Mouse />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
