import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm'

export const RegisterPage = () => {

  const navigate = useNavigate();

  const {name, email, password, onInputChange, onResetForm} = useForm({
        name: '',
        email: '',
        password: '',
  })

  const onRegistrar = (e) => {
    e.preventDefault()
    
    navigate('/panel', {
      replace: true,
      state: {
        logged: true,
        name
      }
    })

    onResetForm();
}
  return (
      <div className='wrapper'>
        <form onSubmit={onRegistrar}>
          <h1>Registrarse</h1>

          <div className='input-group'>
            <input type='text' name='name' 
             id='name' value={name}
             onChange={onInputChange} 
             require autoComplete='off'/>
             <label htmlFor='name'>Nombre:</label>
          </div>
          <input type='text' className='mNuevoMieeroan' name="minuevoMieeroan"></input>
          <div className='input-group'>
            <input type='email' name='email'
             id='email' value={email}
             onChange={onInputChange} 
             require autoComplete='off'/>
             <label htmlFor='email'>Email:</label>
          </div>
          <div className='input-group'>
            <input type='password' name='password' 
             id='password' value={password}
             onChange={onInputChange} 
             require autoComplete='off'/>
             <label htmlFor='password'>Contaseña:</label>
          </div>

          <button>Registrar</button>

        </form>
      </div>


  )
}