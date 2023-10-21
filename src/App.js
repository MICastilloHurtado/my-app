import './App.css';
import {Home, Projects, Contact, Blog} from './pages'
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
