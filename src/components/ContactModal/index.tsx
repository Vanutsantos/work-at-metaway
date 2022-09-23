import React, { useState, useEffect } from "react";
import './styles.scss'

interface ContactModalProps {
  data: any
  handleModal: (body:any) => void
}

const ContactModal = ({data, handleModal}:ContactModalProps):JSX.Element => {
  const [values, setValues] = useState<any>({})
  const fields = [
    {
      name: 'email',
      title: 'Email',
      type: 'text'
    },
    {
      name: 'privado',
      title: 'Privado',
      type: 'text'
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'text'
    },
    {
      name: 'tipoContato',
      title: 'Tipo',
      type: 'text'
    },
  ]

  useEffect(() => {
    if (data){
      setValues({
        email: data.email,
        privado: data.privado ? 'Sim' : 'Não',
        tag: data.tag,
        tipoContato: data.tipoContato,
      })
    }
  },[data])
  
  return(
    <div className="user-registration-modal">
      <div className="user-registration-content">
        <button className="close" onClick={() => handleModal(null)}>Fechar</button>
        <h2>Contato</h2>
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

export default ContactModal