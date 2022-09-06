import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({ user }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) {
        setLoading(false)
        router('/')
      }
    } catch (error) {
      console.log(error?.message)
      setLoading(false)
      alert('Password wrong , Please try again')
    }
  }

  useEffect(() => {
    if (user) {
      router('/')
    }
  }, [])

  return (
    <div className='login-page'>
      <div className='hr'>
        <span className='login'>Login</span>
      </div>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div className='login-email'>
          <label className='form__label' htmlFor='emailName'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form__input'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='login-pass'>
          <label className='form__label' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='pass'
            id='pass'
            className='form__input'
            placeholder='Password'
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='submitBtn'>
          <button disabled={loading} type='submit' className='btn btn-primary'>
            {loading ? 'Loading' : 'Login'}
          </button>
        </div>
      </form>
      <p>
        Don't have account? <Link to='/register'>create an account</Link>
      </p>
    </div>
  )
}

export default Login
