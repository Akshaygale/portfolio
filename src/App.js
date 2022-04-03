import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='about' element={<Aboutme/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
