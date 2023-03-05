import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../../firebase';
import emptyPlayerData from '../../utils/emptyPlayerData';
import { useStateContext } from '../../context';

function Login() {
  const { playerData } = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [civName, setCivName] = useState('');
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup } = useAuth();

  async function savePlayerData(uid) {
    const playerRef = doc(db, 'players', uid);

    await setDoc(playerRef, {
      ...emptyPlayerData,
      playerName,
      civName,
    }, { merge: true });
  }

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

    if (playerName === 'Diego' || playerName === 'diego') {
      setError('Diego is a puto name');
      return;
    }

    if (playerName === 'Fran' || playerName === 'fran') {
      setError('Fran is a super puto name');
      return;
    }

    if (!email || !password || !civName || !playerName) {
      setError('Please enter all the fields');
      return;
    }

    if (password.length < 7) {
      setError('Password should have more than 6 characters');
      return;
    }

    const userId = await signup(email, password);
    savePlayerData(userId);
  }

  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? 'login' : 'register'}
      </h1>

      {error && <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">{error}</div>}

      {!isLoggingIn && <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder="Player Name" className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]" />}

      {!isLoggingIn && <input type="text" value={civName} onChange={(e) => setCivName(e.target.value)} placeholder="Civilization Name" className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]" />}

      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]" />

      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300" />

      <button onClick={submitHandler} className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
        <h2 className="relative z-20">
          SUBMIT
        </h2>
      </button>

      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
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
