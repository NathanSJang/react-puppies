import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser }) {
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <main>
      <h1>AuthPage</h1>
      {showLogIn ? 
      <LoginForm setUser={setUser} /> 
      :
      <SignUpForm setUser={setUser} />
      }
      <button onClick={() => setShowLogIn(!showLogIn)}>{showLogIn ? 'Sign Up' : 'Log in'}</button>
    </main>
  );
}