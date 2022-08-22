import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SigninPage from './views/SigninPage';
import SignupPage from './views/SignupPage';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/SigninPage">
            <SigninPage />
          </Route>
          <Route path="/SignupPage">
            <SignupPage />
          </Route>
          <Route path="/">
            <h1>Page Count: {count} </h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
