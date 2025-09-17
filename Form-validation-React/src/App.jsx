import { useState } from "react"
import './App.css'

const App = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [showMsg, setShowMsg] = useState("")
  let msg = {}
  
  let handleLogin = () => {
    email === "" && password === "" ? setShowMsg("Please enter your email and Password") : email === "" ? setShowMsg("Please enter your Email") : password === "" ? setShowMsg("Please enter your Password") : setShowMsg("Login Successfull")

    setEmail("")
    setPassword("")
  }

  if (showMsg === "Login Successfull") {
    msg = {
      color: "#44ef91ff",
    }
  }
  else {
    msg = {
      color: "#ef4444",
    }
  }

  return (
    <div className="form">
      <h1>Login</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password" required />
      <button>Login</button>
      <p style={msg} onClick={handleLogin}>{showMsg}</p>
    </div>
  )
}
export default App