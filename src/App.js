import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Homepage from "./components/Homepage"
import Menu from './components/Menu'

// Pages
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
    <Route path="/" element={<Homepage />} exact />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Error />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
