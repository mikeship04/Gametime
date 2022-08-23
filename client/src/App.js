import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SigninPage from './views/SigninPage'
import SignupPage from './views/SignupPage'
import HomePage from './views/HomePage'

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const updateUser = (user) => setCurrentUser(user)
  console.log(currentUser)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/SigninPage">
            <SigninPage updateUser={updateUser} />
          </Route>
          <Route path="/SignupPage">
            <SignupPage updateUser={updateUser} />
          </Route>
          <Route path="/HomePage">
          <HomePage currentUser={currentUser} />
          </Route>
          <Route path="/">
            <h1>Page Count </h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
