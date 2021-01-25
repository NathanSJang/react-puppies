import { useEffect, useState } from 'react';
import * as puppiesAPI from '../../utilities/puppies-api'

import PuppyList from "../../components/PuppyList/PuppyList";

export default function NewPuppiesPage() {
  const [puppies, setPuppies] = useState([]);

  useEffect( () => {
    async function getPuppies() {
      const puppies = await puppiesAPI.getAll();
      setPuppies(puppies)
    }
    getPuppies()
  }, [])


  return(
    <>
    <h1>Puppies List Page</h1>
    <PuppyList puppies={puppies} />
    </>
  );
}