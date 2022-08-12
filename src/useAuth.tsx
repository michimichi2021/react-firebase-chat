import { useState } from "react"
import { firebaseApp } from "./firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { signOut } from "firebase/auth"
import { sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"

const fireauth = firebaseApp.fireauth

export const useSignup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const signup = (email: string, password: string) => {
    setError(null)
    createUserWithEmailAndPassword(fireauth, email, password)
      .then(res => {
        console.log(res.user)
        setTimeout(() => {
          navigate("/login")
        }, 2000)
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

export const useLogout = () => {
  const logout = () => {
    signOut(fireauth)
      .then(() => {
        console.log("Sign-out successful.")
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  return { logout }
}

export const usePasswordReset = () => {
  const navigate = useNavigate()

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const passwordReset = (email: string) => {
    sendPasswordResetEmail(fireauth, email)
      .then(() => {
        setSuccess(true)
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { success, error, passwordReset }
}
