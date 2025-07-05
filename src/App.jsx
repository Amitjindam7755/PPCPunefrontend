import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/ImgGallery'
import MemberRegistration from './pages/onlineServices/MemberRegistration'
import Matrimonials from './pages/Matrimonials/pages/Matrimonials'
import Magazines from './pages/Magazines/Magazines'
import ProfileCard from './pages/Matrimonials/pages/ProfileCard'
import LoginUser from './pages/Matrimonials/pages/LoginUser'
import Matches from './pages/Matrimonials/pages/Matches'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import AlandiRoomBooking from './pages/onlineServices/AlandiRoomBooking'
import MarkandeyaAbhishek from './pages/onlineServices/MarkandeyaAbhishek'
import PoshavvadeviAbhishek from './pages/onlineServices/PoshavvadeviAbhishek'
import ShitaladeviAbhishek from './pages/onlineServices/ShitaladeviAbhishek'
import Login from './components/Admin/Login'
import Register from './components/Admin/Register'
import ProtectedRoute from './components/Admin/ProtectedRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Admin from './pages/Admin/Admin'
import AdminNotifications from './pages/Admin/AdminNotifications'
import AdminSubscribers from './pages/Admin/AdminSubscribers'
import EventAdmin from './pages/Admin/EventAdmin'
import AdminGallery from './pages/Admin/AdminGallery'
import AdminMagazines from './pages/Admin/AdminMagazines'
import AdminMatrimonyCandidateProfile from './pages/Admin/AdminMatrimonyCandidateProfile'
import Footer from './components/Footer/Footer'
import AdminBookings from './pages/Admin/AdminBookings'
import AdminMarkandaya from './pages/Admin/AdminMarkandaya'
import AdminPoshavvadevi from './pages/Admin/AdminPoshavvadevi'
import AdminShitaladevi from './pages/Admin/AdminShitaladevi'
import ManagementTeam from './pages/ManagementTeam/ManagementTeam'
import AdminFamilyDashboard from './pages/Admin/AdminFamilyDashboard'
import FamilyMembersView from './pages/Admin/FamilyMembersView'
import PrivacyPolicy from './pages/Terms/PrivacyPolicy'
import AnimatedBackground from './components/Animation/AnimatedBackground'
// import ConfettiParty from './components/Animation/ConfettiParty'
import { useLocation } from 'react-router-dom'



const App = () => {

  const location = useLocation();
  const showFooter = location.pathname === '/' || location.pathname === '/contact'

   return (
    <>
    <AnimatedBackground/>
    <div style={{position:"relative", zIndex: 1}}>
      <Navbar/>
        <Routes>
          {/* <Route path='/admin' element={<Adminauth/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/onlineServices/memberRegistraion' element={<MemberRegistration/>}/>
          <Route path='/matrimonials' element={<Matrimonials/>}/>
          <Route path='/managementTeam' element={<ManagementTeam/>} />
          <Route path='/magazines' element={<Magazines/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profilecard' element={<ProfileCard/>} />
          <Route path='/loginUser' element={<LoginUser/>} />
          <Route path='/matches' element={<Matches/>} />
          <Route path='/onlineServices/alandiRoomBooking' element={<AlandiRoomBooking/>} />
          <Route path='/onlineServices/markandeyaAbhishek' element={<MarkandeyaAbhishek/>} />
          <Route path='/onlineServices/poshavvadeviAbhishek' element={<PoshavvadeviAbhishek/>} />
          <Route path='/onlineServices/shitaladeviAbhishek' element={<ShitaladeviAbhishek/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path='/matches' element={<MatchingResult/>} /> */}

    {/* Authentication dashboard */}
    <Route path="/adminLogin" element={<Login />}/>
          <Route path="/register" element={<Register />} />
    <Route path='/admin/dashboard' element={
      <ProtectedRoute>
        <AdminDashboard/>
     </ProtectedRoute>
    }>

    <Route path="contacts" element={<Admin/>} />
    <Route path="notifications" element={<AdminNotifications/>} />
    <Route path="subscribers" element={<AdminSubscribers/>} />
    <Route path="events" element={<EventAdmin/>} />
    <Route path="gallery" element={<AdminGallery/>} />
    <Route path="magazines" element={<AdminMagazines/>} />  
    <Route path="profiles" element={<AdminMatrimonyCandidateProfile/>} />
    <Route path="bookings" element={<AdminBookings/>} />
    <Route path="abhishek-bookings" element={<AdminMarkandaya/>} />
    <Route path="poshavvadevi-bookings" element={<AdminPoshavvadevi/>} />
    <Route path="shitaladevi-bookings" element={<AdminShitaladevi/>}/>
    <Route path="heads" element={<AdminFamilyDashboard/>} />
     {/* members/families */}
     </Route> 
     <Route path="/admin/family/:headId" element={<FamilyMembersView/>} />
      </Routes>
    </div> 
    {showFooter && <Footer/>}           
     </>
  )
}

export default App



