import React, { useCallback, useEffect, useState } from 'react';
import { getUser } from '../../helpers/storage';
import { loadUserById, updateUser } from '../../services/Users';
import './styles.scss'

const Profile = () => {
  const [data, setData] = useState<any>(null)
  const {id} = getUser()
  const fields = [
    {
      name: 'cpf',
      title: 'CPF',
      type: 'text'
    },
    {
      name: 'dataNascimento',
      title: 'Data de nascimento',
      type: 'text'
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'email'
    },
    {
      name: 'nome',
      title: 'Nome',
      type: 'text'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'text'
    },
    {
      name: 'password',
      title: 'Senha',
      type: 'password'
    },    
    {
      name: 'telefone',
      title: 'Telefone',
      type: 'tel'
    },
  ]

  const getUserById = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadUserById(id)
      setData(data.object.usuario)
    } catch (error) {
      console.error(error)
    }
  },[id])

  const updateCurrentUser = async():Promise<void> => {
    try {
      await updateUser(data)
      alert('Salvo com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getUserById()
  },[getUserById])

  console.log(data)

  return(
    <div className="container">
      <h1>Meu cadastro</h1>

      {data && 
        <div className="profile-wrapper">
          <form autoComplete="new-password">
            {fields.map((item:any) => (
              <div className="form-group">
                <span>{item.title}:</span>

                <input 
                  id={item.name}
                  name={item.name}
                  type={item.type || 'text'}
                  value={data[item.name]}
                  onChange={(e) => {
                    setData((prev:any) => ({
                      ...prev,
                      [item.name]: e.target.value
                    }))
                  }}
                />
              </div>
            ))}
          </form>

          <button className="submit" type="button" onClick={updateCurrentUser}>Salvar</button>
        </div>
      }
    </div>
  )
}

export default Profile;


