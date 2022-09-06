import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/firebase'
import './style.css'

const Registration = ({ user }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const router = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { email, password, confirmPassword } = data

    if (password === confirmPassword) {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        if (user) {
          setLoading(false)
          router('/')
        }
      } catch (error) {
        setLoading(false)
        alert('Something went wrong try again')
        console.log(error)
      }
    } else {
      alert('Password did not match')
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      router('/')
    }
  }, [])

  return (
    <div className='form'>
      <div className='hr'>
        <span className='reg'>Register</span>
      </div>
      <form className='form-body' onSubmit={handleSubmit}>
        <div className='email'>
          <label className='form__label' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form__input'
            placeholder='Email'
            value={data.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className='password'>
          <label className='form__label' htmlFor='password'>
            Password
          </label>
          <input
            className='form__input'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={data.password}
            required
            onChange={handleChange}
            minLength={6}
          />
        </div>
        <div className='confirm-password'>
          <label className='form__label' htmlFor='confirmPassword'>
            Confirm Password
          </label>
          <input
            className='form__input'
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Confirm Password'
            required
            value={data.confirmPassword}
            onChange={handleChange}
            minLength={6}
          />
        </div>
        <div className='submitBtn'>
          <button disabled={loading} type='submit' className='btn btn-primary'>
            {loading ? 'Loading' : 'Register'}
          </button>
        </div>
      </form>
      <p>
        Already have account <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}

export default Registration
