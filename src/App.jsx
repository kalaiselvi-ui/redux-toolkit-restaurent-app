import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import FootItemsDetails from './pages/FootItemsDetails'
import Home from './pages/Home'
import Success from './pages/Success'


function App() {

  const [ isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <HashRouter>
        <Navbar toggleCart={()=> setIsCartOpen((prev)=> !prev)}/>
        <Routes>
          <Route path="/" element={<Home  isCartOpen={isCartOpen}
                toggleCart={() => setIsCartOpen((prev) => !prev)}/>} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<Error />} />
          <Route path="/items/:id" element={<FootItemsDetails />}></Route>

        </Routes>
        <div>
          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </HashRouter>
    </>
  )
}

export default App
