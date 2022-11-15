import { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    setError(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);

      if (!res) {
        throw new Error('could not signup');
      }

      await res.user.updateProfile({ displayName });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }

    // const signup = (email, password, displayName) => {
    //   setError(null);

    //   createUserWithEmailAndPassword(auth, email, password, displayName)
    //     .then((res) => {
    //       console.log('user signed in', email, password, displayName);
    //     })
    //     .catch((err) => {
    //       setError(err.message);
    //     });
    // }

  };
  return { error, signup };
};
