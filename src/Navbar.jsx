import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const {state} = useLocation()

  const navigate = useNavigate();

    console.log(state)

    const onLogout = () =>{
      navigate('/login',{
        replace: true,
      })
    }
  return (
    <>
            <header>
            <h1>
                <Link to='/'>ASV BIBLIOTECA</Link>
            </h1>

  
            {
              state?.logged ? (
            <div className="user">
                <span className='username'>{state?.name}</span>
                <button className='btn-logout' onClick={onLogout}>Cerrar Sesion</button>
            </div>
              ) : (
                <nav>
                <Link to="/login" >Iniciar Sesion</Link>
                <Link to="/register" >Registrarse</Link>

            </nav>
              )}
            </header>
            

              <Outlet />
    </>
    
   );
};
