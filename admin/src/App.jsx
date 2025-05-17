// import React from 'react'
// import './App.css'
// import Sidebar from './components/Sidebar/Sidebar'
// import Navbar from './components/Navbar/Navbar'
// import Orders from './pages/Orders/Orders'
// import List from './pages/List/List'
// import Add from './pages/Add/Add'
// import { Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'

// const adminPage = document.getElementById("adminPage");
// const adminName = "nammafood272004";
// const adminPassword = "9345271526";
// localStorage.setItem("access", "false");
// const login = (event) => {
//   event.preventDefault();
//   console.log(localStorage.getItem("access"))
//   const adminLoginPage = document.getElementById("adminLoginPage");
//   const user = document.getElementById("admin");
//   const password = document.getElementById("password");
//   localStorage.setItem("access", "true")
// }

// const App = () => {
//   console.log(localStorage.getItem("access") === "true");

//   const url = "http://localhost:4000"

//   return (
//     <div>
//       <div id='adminLoginPage'>
//         <form onSubmit={login}>
//           <div>
//             <label htmlFor="admin">Admin Name</label>
//             <input id='admin' type="text" name='admin' required />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input id='password' type="password" name='password' required />
//           </div>
//           <div>
//             <button type='submit'>Login</button>
//           </div>
//         </form>
//       </div>
//        {localStorage.getItem("access") === "true"?
//         <div id='adminPage'>
//           <ToastContainer />
//           <Navbar />
//           <hr />
//           <div className="app-content">
//             <Sidebar />
//             <Routes>
//               <Route path='/add' element={<Add url={url} />} />
//               <Route path='/list' element={<List url={url} />} />
//               <Route path='/orders' element={<Orders url={url} />} />
//             </Routes>
//           </div>
//         </div>:""
//       }
    
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css'
import AdminLogin from './AdminLogin'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [access, setAccess] = useState(false)
  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer />
      {access ? (
        <div id='adminPage'>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path='/add' element={<Add url={url} />} />
              <Route path='/list' element={<List url={url} />} />
              <Route path='/orders' element={<Orders url={url} />} />
              <Route path='*' element={<Navigate to="/list" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <AdminLogin onLogin={() => setAccess(true)} />
      )}
    </div>
  )
}

export default App
