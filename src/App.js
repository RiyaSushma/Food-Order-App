import './App.css';
import React, {useEffect} from 'react';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { StateProvider } from './context';
import Add_to_Cart from './screens/Add_to_Cart';



function App() {
  return (    
      <StateProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/login" element={<Login/>}></Route>
              <Route exact path="/signup" element={<Signup></Signup>}></Route>
              <Route exact path="/add_to_cart" element={<Add_to_Cart></Add_to_Cart>}></Route>
            </Routes>
          </div>
        </Router>
      </StateProvider>

  );
}

export default App;
