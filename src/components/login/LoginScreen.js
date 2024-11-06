import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = () => {

  // const context = useContext(AuthContext)

  // console.log(context)
 const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const path = localStorage.getItem("lastPath") || "/"

  const handleClick = () => {
    // navigate("/") te lleva a la raiz es la equivalencia al history.push("/")

    dispatch({
      type:types.login,
      payload:{
        name:"Sergio"
      }
    })

    
    // if(path){
    //   navigate(`/${path}`,{ replace: true })// para remplazar el historial y no se muestre las paginas 
    // }

    navigate(path,{ replace: true })// para remplazar el historial y no se muestre las paginas 
    
   
    
   
    
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
