import { useLocation } from 'react-router-dom';

import PuppyCard from '../../components/PuppyCard/PuppyCard'

function PuppyDetailPage() {
  const { state: {puppy} } = useLocation();
  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard 
        puppy={puppy}
      />
    </>
  )
}

export default PuppyDetailPage