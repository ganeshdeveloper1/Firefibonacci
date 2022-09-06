import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase'

const Nav = ({ user }) => {
  const handleClick = () => {
    try {
      signOut(auth)
    } catch (error) {
      console.log('Something went wrong Try Agian!')
    }
  }

  return (
    <nav className=' navbar'>
      <div className='row col-12  text-white text-center'>
        <h3>Fibonacci</h3>
      </div>
      {user && (
        <p onClick={handleClick} className='log-out'>
          Logout
        </p>
      )}
    </nav>
  )
}

export default Nav
