import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";


export const useLogin = () => {
  const [error, setError] = useState(null)

  const login = (email, password) => {
    setError(null)

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('user logged in');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return { error, login }
}