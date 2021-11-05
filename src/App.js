import './App.css';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Story from './Story';
import NotFound from './Notfound';
import {Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/story' element={<Story />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
