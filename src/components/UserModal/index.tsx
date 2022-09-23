import React, { useState, useEffect } from "react";
import './styles.scss'

interface UserModalProps {
  data: any
  onSubmit: (body:any) => any
  handleModal: (body:any) => void
}

const UserModal = ({data, onSubmit, handleModal}:UserModalProps):JSX.Element => {
  const [values, setValues] = useState<any>({})
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

  if (!data){
    fields.push(  {
      name: 'tipo',
      title: 'Tipo',
      type: 'text'
    },)
  }

  useEffect(() => {
    if (data){
      setValues({
        cpf: data.cpf,
        nome: data.nome,
        dataNascimento: data.dataNascimento,
        email: data.email,
        username: data.username,
        telefone: data.telefone
      })
    }
  },[data])
  
  return(
    <div className="user-registration-modal">
      <div className="user-registration-content">
        <button className="close" onClick={() => handleModal(null)}>Fechar</button>
        <h2>Usuário</h2>
        <form autoComplete="new-password">
          {fields.map((item:any) => (
            <div className="form-group">
              <span>{item.title}:</span>

              <input 
                id={item.name}
                name={item.name}
                type={item.type || 'text'}
                value={values[item.name]}
                onChange={(e) => {
                  setValues((prev:any) => ({
                    ...prev,
                    [item.name]: e.target.value
                  }))
                }}
              />
            </div>
          ))}
        </form>
        {!data && <button className="submit" type="button" onClick={() => onSubmit(values)}>Salvar</button>}
      </div>
    </div>
  )
}

export default UserModal