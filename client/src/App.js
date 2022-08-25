import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React, {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SigninPage from './views/SigninPage'
import SignupPage from './views/SignupPage'
import HomePage from './views/HomePage'
import Navigation from './views/Navigation'
import CasinoWar from './views/CasinoWar'
import Memory from './views/Memory'

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const updateUser = (user) => setCurrentUser(user)

  return (
    <BrowserRouter>
    <Navigation currentUser={currentUser} updateUser={updateUser} />
      <Routes>
          <Route path="MemoryPage" element={<Memory />}></Route>
          <Route path="/SigninPage" element={<SigninPage updateUser={updateUser}/>}></Route>
          <Route path="/SignupPage" element={<SignupPage updateUser={updateUser}/>}></Route>
          <Route path="/HomePage" element={<HomePage currentUser={currentUser} />}></Route>
          <Route path='/CasinoWar' element={<CasinoWar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;