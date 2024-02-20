import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Getrecipe from './componenets/Getrecipe'
import Addrecipe from './componenets/Addrecipe';
import Updaterecipe from './componenets/Updaterecipe';

import Home from './Home';
import Register from './Authenciation/Register';
import Login from './Authenciation/Login';

function App() {

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/get' element={<Getrecipe />} />
      <Route path='/add' element={<Addrecipe />} />
      <Route path='/update/:id' element={<Updaterecipe />} />
    
    </Routes>
  </Router>
   
    </>
  )
}

export default App
