import React, { useState } from 'react'
import './AdminLogin.css'

const AdminLogin = ({ onLogin }) => {
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.admin.value
    const password = e.target.password.value

    if (username === "nammafood272004" && password === "9345271526") {
      onLogin()
    } else {
      setError("Invalid admin credentials")
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <div>
          <label htmlFor="admin">Admin Name</label>
          <input type="text" name="admin" id="admin" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
