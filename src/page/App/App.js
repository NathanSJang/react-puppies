import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { getUser } from "../../utilities/users-service";
import AuthPage from '../AuthPage/AuthPage';
import PuppiesListPage from '../PuppiesListPage/PuppiesListPage'
import PuppiesHistoryPage from '../PuppiesHistoryPage/PuppiesHistoryPage';
import AddPuppyPage from '../AddPuppyPage/AddPuppyPage';
import PuppyDetailPage from '../PuppyDetailPage/PuppyDetailPage'
import PuppyEditPage from "../PuppyEditPage/PuppyEditPage";
import NavBar from '../../components/NavBar/NavBar';
import * as puppyAPI from "../../utilities/puppies-api";

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);

  useEffect( () => {
    async function getPuppies() {
      const puppies = await puppyAPI.getAll();
      setPuppies(puppies)
    }
    getPuppies()
  }, [])
  
    const history = useHistory();
    
    useEffect(() => {
      history.push("/puppies/list")
    }, [puppies, history])

  async function handleAddPuppy (newPupData){
    const newPup = await puppyAPI.create(newPupData);
    setPuppies([...puppies, newPup])
  }

  async function handleUpdatePuppy(updatedPuppyData) {
    const updatedPuppy = await puppyAPI.update(updatedPuppyData);
    const newPuppyArray = puppies.map(puppy => puppy._id === updatedPuppy._id ? updatedPuppy : puppy);
    setPuppies(newPuppyArray);
  }

  async function handleDeletePuppy(puppyID) {
    const deletedPuppy = await puppyAPI.deleteOne(puppyID);
    setPuppies(puppies.filter(p => p._id !== puppyID))
  }

  return (
    <div className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/puppies/list">
                <PuppiesListPage puppies={puppies} handleDeletePuppy={handleDeletePuppy}/>
              </Route>
              <Route path="/puppies/add">
                <AddPuppyPage handleAddPuppy={handleAddPuppy} />
              </Route>
              <Route exact path="/puppies/details">
                <PuppyDetailPage />
              </Route>
              <Route exact path="/puppies/edit">
                <PuppyEditPage handleUpdatePuppy={handleUpdatePuppy}/>
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
