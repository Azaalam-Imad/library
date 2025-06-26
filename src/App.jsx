
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Mycontext, MyProvider } from "./context/Index";
import { useContext } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Detaills from './pages/Detaills';


function App() {





  return (
      
    
     
    <>
     <MyProvider>
        <Routes>
                <Route path="/Dashboard" element={<Dashboard  />} />
                <Route path="/Dashboard/:id" element={<Detaills />} />
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
      </Routes>
      </MyProvider>
    </>
  )
}

export default App
