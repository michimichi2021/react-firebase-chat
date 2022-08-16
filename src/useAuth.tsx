import { useState } from "react"
import { firebaseApp } from "./firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

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

export const useLogin = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const login = (email: string, password: string) => {
    setError(null)
    signInWithEmailAndPassword(fireauth, email, password)
      .then(() => {
        setSuccess(true)
        setTimeout(() => {
          navigate("/")
        }, 2000)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { success, error, login }
}
