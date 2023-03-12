import React, { useState} from 'react';
import { useAuth } from '../../context/authContext';
import { createPlayer } from '../../actions/playerActions';
import useFetchPlayerData from '../../hooks/useFetchPlayerData';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, register } = useAuth();

  async function submitHandler() {
    if (isLoggingIn) {
      if (!email || !password) {
        setError('Please enter email and password');
        return;
      }
      try {
        await login(email, password);
      } catch (err) {
        setError('Incorrect email or password');
      }
      return;
    }

    if (!email || !password) {
      setError('Please enter all the fields');
      return;
    }

    if (password.length < 7) {
      setError('Password should have more than 6 characters');
      return;
    }

    const userId = await register(email, password);
    createPlayer(userId);
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-2 text-xs sm:text-sm sm:gap-4">
      <h1 className="text-2xl font-extrabold uppercase select-none sm:text-4xl">
        {isLoggingIn ? 'login' : 'register'}
      </h1>

      {error && <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">{error}</div>}

      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]" />

      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300" />

      <button onClick={submitHandler} className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
        <h2 className="relative z-20">
          SUBMIT
        </h2>
      </button>

      <h2
        className="duration-300 cursor-pointer hover:scale-110"
        onClick={() => {
          setIsLoggingIn(!isLoggingIn);
          setError(false);
        }}
      >
        {!isLoggingIn ? 'Login' : 'Register'}
      </h2>
    </div>
  );
}

export default Login;
