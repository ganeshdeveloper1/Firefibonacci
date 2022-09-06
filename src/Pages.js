import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/login'
import Nav from './Components/Nav/nav'
import Program from './Components/Program/program'
import Registration from './Components/Registration/registration'
import useAuth from './hooks/useAuth'

export default function Pages() {
  const user = useAuth()

  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path='/' element={<Program user={user} />} />
        <Route path='/login' element={<Login user={user} />} />
        <Route path='/register' element={<Registration user={user} />} />
      </Routes>
    </>
  )
}
