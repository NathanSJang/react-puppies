
import PuppyList from "../../components/PuppyList/PuppyList";

export default function NewPuppiesPage({ puppies, handleDeletePuppy}) {

  


  return(
    <>
    <h1>Puppies List Page</h1>
    <PuppyList puppies={puppies} handleDeletePuppy={handleDeletePuppy} />
    </>
  );
}