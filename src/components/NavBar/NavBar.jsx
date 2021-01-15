import {Link, NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <NavLink exact activeStyle={{color: 'blue'}} to="/puppies">Puppies</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{color: 'blue'}} to="/puppies/new">new Puppy</NavLink>
    </nav>
  );
}