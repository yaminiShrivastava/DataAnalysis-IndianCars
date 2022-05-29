import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
// import './index.css'
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Contact' exact element={<Contact/>}/>
      <Route path='/Services' exact element={<Services/>}/>

      </Routes>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
