import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from '../src/components/Main'
import About from './components/About';
import Gallery from './components/Gallery';
import  Menu  from './components/Menu';
import  {Contact}  from './components/Contact';
import Booking from './components/Book';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
     <BrowserRouter>
        
        <>
         
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/Booking' element={<Booking />}/>
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            
          </Routes>
       
        </>
    
    </BrowserRouter>
   
    </>
  );
}

export default App;
