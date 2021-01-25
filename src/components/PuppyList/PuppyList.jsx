import React from 'react';
import './PuppyList.css';
import PuppyListItem from '../../components/PuppyListItem/PuppyListItem';

function PuppyList(props) {
  return (
    <>
      <h1>Puppy List</h1>
      <div className='PuppyList-grid'>
        {props.puppies.map(puppy => 
          <PuppyListItem
            puppy={puppy}
            key={puppy._id}
            handleDeletePuppy={props.handleDeletePuppy}
          />
        )}
      </div>
    </>
  );
}


export default PuppyList;