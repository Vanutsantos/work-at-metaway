import React, { useCallback, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CookieHelper } from '../../helpers/cookies';
import { settings } from '../../helpers/settings';
import { getUser, setUser } from '../../helpers/storage';
import { auth } from '../../services/Auth';
import './styles.scss'

interface FormProps {
  username?: string,
  password?: string
}

const Auth = ():JSX.Element => {
  const [values, setValues] = useState<FormProps>({})
  const user = getUser() 
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await auth(values)
      if(data?.accessToken){
        CookieHelper.add(settings.TOKEN, data.accessToken)
        setUser(data)
        navigate("/");
      }
    } catch (error) {
      console.error(error)
    }
  },[values, navigate])


  if(user) return <Navigate to="/"/>
  return(
    <div className='auth'>
      <div className="form-container">
        <h1>Metaway</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <span>Login</span>
            <input
              type="text"
              value={values.username}
              onChange={(e) => {
                setValues((prev:any) => ({
                  ...prev,
                  username: e.target.value
                  }))
                }}
            />
          </div>
            
          <div className="form-group">
            <span>Senha</span>
            <input
              type="password"
              value={values.password}
              onChange={(e) => {
              setValues((prev:any) => ({
                ...prev,
                password: e.target.value
                }))
              }}
            />
          </div>

          <div className="form-group">
            <button type='submit'>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;