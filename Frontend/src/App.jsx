import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyApointments from './Pages/MyApointments'
import Appointments from './Pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'> 
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/appointment/:docId' element={<Appointments />} />
        <Route path='/my-appointment' element={<MyApointments />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
