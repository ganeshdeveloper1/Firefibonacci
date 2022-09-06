import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './style.css'

const Program = ({ user }) => {
  const [num, setNum] = useState({
    firstNumber: '',
    secondNumber: '',
  })
  const [fiboNo, setFiboNo] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNum({ ...num, [name]: value })
  }

  const handleSubmit = (val) => {
    if (val.num.firstNumber === '' || val.num.secondNumber === '') {
      alert('Plzz fill the inputs.')
    } else {
      let firstVal = parseInt(val.num.firstNumber)
      let secondVal = parseInt(val.num.secondNumber)

      let fibo = []
      fibo.push(firstVal)
      fibo.push(secondVal)
      for (let i = 1; i < 11; i++) {
        fibo.push(fibo[i] + fibo[i - 1])
      }

      setFiboNo(fibo)
    }
  }

  return user ? (
    <>
      <div className='fiboInput bg-light w-50 '>
        <div className='hr'>
          <span className='fi-hr'>Enter the Fibonacci No.</span>
        </div>
        <div
          className='input-field d-flex justify-content-center align-items-center'
          id='input-field'
        >
          <input
            className='form__input'
            type='number'
            placeholder='Enter the first No.'
            name='firstNumber'
            value={num.firstNumber}
            onChange={handleChange}
          />
          <input
            className='form__input'
            type='number'
            placeholder='Enter the second No.'
            name='secondNumber'
            value={num.secondNumber}
            onChange={handleChange}
          />
          <div className='button'>
            <button
              className='btn btn-primary'
              onClick={() => {
                handleSubmit({ num })
              }}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className='fiboNo'>
        <h3>
          The Fibonacci series for the two given numbers upto 10 digits are :
        </h3>
        <ul>
          {fiboNo.map((data, id) => (
            <li className='list-items' key={id}>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <Navigate to='/login' replace />
  )
}

export default Program
