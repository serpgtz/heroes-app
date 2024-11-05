import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate()


  const handleClick = () => {
    // navigate("/") te lleva a la raiz es la equivalencia al history.push("/")
    navigate("/",{ replace: true })// para remplazar el historial y no se muestre las paginas anteriores
    
  
  }

  return (
    <div className='container mt-5'>
        <h1 className='h1-principal'>Login</h1>
        <hr />
        <button className='btn btn-primary'
        onClick={handleClick}>
            Login
        </button>
    </div>
  )
}
