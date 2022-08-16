import { useState } from "react"
import { firebaseApp } from "./firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"

const fireauth = firebaseApp.fireauth

export const useSignup = () => {
  const [error, setError] = useState(null)

  const signup = (email: string, password: string) => {
    setError(null)
    createUserWithEmailAndPassword(fireauth, email, password)
      .then(res => {
        console.log(res.user)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { error, signup }
}