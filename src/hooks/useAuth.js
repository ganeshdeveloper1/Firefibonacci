import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { app, auth } from '../Firebase/firebase'

export default function useAuth() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth')))

  useEffect(() => {
    const listner = onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        localStorage.setItem('auth', JSON.stringify(authuser))
        setUser(authuser)
        console.count('Set localstorage')
      } else {
        localStorage.removeItem('auth')
        setUser(null)
      }
    })

    return () => listner()
  }, [app])

  return user
}
