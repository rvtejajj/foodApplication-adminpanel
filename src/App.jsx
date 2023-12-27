import React, { useState } from 'react'
import Menubar from './components/Menubar/Menubar'
import Sidebar from './components/Sidebar/Sidebar'
import AddFood from './pages/AddFood/AddFood';
import ListFood from './pages/ListFood/ListFood';
import Orders from './pages/Orders/Orders';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './pages/Footer/Footer';

const App = () => {
   const [sidebarVisible, setSidebarVisible] = useState(true);
   const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
   } 


  return (
    <div className="d-flex" id="wrapper">
           <Sidebar sidebarVisible={sidebarVisible}/>
            <div id="page-content-wrapper">
                <Menubar toggleSidebar = {toggleSidebar}/>
                <ToastContainer/>
                <div className="container-fluid">
                    <Routes>
                        <Route path='/add' element={<AddFood/>} />
                        <Route path='/list' element={<ListFood/>} />
                        <Route path='/order' element={<Orders/>} />
                        <Route path='/' element={<ListFood/>} />
                    </Routes>
                </div>
                <Footer />
            </div>
         
        </div>
  )
}

export default App