import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [userName, setUsername] = React.useState('')

  const login = (e) => {
    e.preventDefault()
    auth.login({userName})
    navigate('/profile')
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe ru nombre de usuario</label>
        <input
          value={userName}
          onChange={e => setUsername(e.target.value)}
        />

        <button type='submit'>Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };
