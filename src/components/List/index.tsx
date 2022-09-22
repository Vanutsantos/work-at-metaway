import React from 'react'
import './styles.scss'

const List = ():JSX.Element => {

  const header = [
    {
      title: 'Nome',
      object: 'nome'
    },
    {
      title: 'Data de nascimento',
      object: 'dataNascimento'
    },
    {
      title: 'CPF',
      object: 'cpf'
    },
    {
      title: 'Email',
      object: 'email'
    },
    {
      title: 'Telefone',
      object: 'telefone'
    },
    {
      title: 'Username',
      object: 'username'
    }
  ]

  const content = [
    {
        "id": 1,
        "nome": "Administrador",
        "dataNascimento": "1986-12-03",
        "cpf": "380.854.570-40",
        "email": "suporte@metaway.com.br",
        "telefone": "(54) 3055-2577",
        "username": "admin",
        "password": "$2a$10$nFezmH.OppxvpqlroxkP9uERtLWbNyJiRKO/ronjn0AnFEZhqoKLu"
    },
    {
        "id": 2,
        "nome": "Usuário",
        "dataNascimento": "1982-04-18",
        "cpf": "023.884.381-52",
        "email": "usuario@metaway.com.br",
        "telefone": "(54) 3055-2577",
        "username": "user",
        "password": "$2a$10$nFezmH.OppxvpqlroxkP9uERtLWbNyJiRKO/ronjn0AnFEZhqoKLu"
    }
]

  return(
    <div className='list-component'>
      <div className='header'>
        {header.map((th:any) => (
          <div 
            key={th.object}
            className='custom-th'
            style={{
              width: `${100/8}%`
            }}
          >
            <h4>{th.title}</h4>
          </div>
        ))}
      </div>
      <div className='body'>
        {content.map((th:any) => (
          <div key={th.id} className="custom-tr">
            {header.map((td:any) => (
              <div 
                key={td.object} 
                className='custom-td'
                style={{
                  width: `${100/8}%`
                }}
              >
                <p key={td.object}>{th[td.object]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
