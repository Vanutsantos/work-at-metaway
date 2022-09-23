import React, { useState, useEffect } from "react";
import './styles.scss'

interface PeopleModalProps {
  data: any
  handleModal: (body:any) => void
}

const PeopleModal = ({data, handleModal}:PeopleModalProps):JSX.Element => {
  const [values, setValues] = useState<any>({})
  const fields = [
    {
      name: 'nome',
      title: 'Nome',
      type: 'text'
    },
    {
      name: 'cpf',
      title: 'CPF',
      type: 'text'
    },
    {
      name: 'cidade',
      title: 'Cidade',
      type: 'text'
    },
    {
      name: 'estado',
      title: 'Estado',
      type: 'text'
    },
  ]

  useEffect(() => {
    if (data){
      setValues({
        nome: data.nome,
        cpf: data.cpf,
        cidade: data.cidade,
        estado: data.estado,
      })
    }
  },[data])
  
  return(
    <div className="user-registration-modal">
      <div className="user-registration-content">
        <button className="close" onClick={() => handleModal(null)}>Fechar</button>
        <h2>Pessoa</h2>
        <form autoComplete="new-password">
          {fields.map((item:any) => (
            <div className="form-group">
              <span>{item.title}:</span>

              <input 
                id={item.name}
                name={item.name}
                type={item.type || 'text'}
                disabled
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
      </div>
    </div>
  )
}

export default PeopleModal