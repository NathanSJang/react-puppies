import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { getUser } from "../../utilities/users-service";
import AuthPage from '../AuthPage/AuthPage';
import NewPuppiesPage from '../NewPuppiesPage/NewPuppiesPage';
import PuppiesHistoryPage from '../PuppiesHistoryPage/PuppiesHistoryPage';
import NavBar from '../../components/NavBar/NavBar'

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/puppies/new">
                <NewPuppiesPage />
              </Route>
              <Route path="/puppies">
                <PuppiesHistoryPage />
              </Route>
              <Redirect to="/puppies" />
            </Switch>
          </>
          :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
