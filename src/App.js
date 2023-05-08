import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './components/Homepage';
import './components/SimpleInput';
import SimpleInput from './components/SimpleInput';
import Homepage from './components/Homepage';
import './components/Hamilton';
import Hamilton  from "./components/Hamilton";
import { Navbar } from "react-bootstrap";
import Navbar1 from "./navbar/Navbar1";

function App() {
  return(
  
  <div className='divs'>
  <Router>
      <Routes>
        <Route path="/" element={<SimpleInput />} />
        <Route path="/homepage" element={<Homepage />} />
        
        <Route path="/Hamilton" element={<Hamilton />} />
        <Route path="/navbar" element={<Navbar1 />} />
      </Routes>
  </Router>
  </div>
)
}

export default App;
