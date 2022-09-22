import React, { useCallback, useEffect, useState } from 'react';
import { loadContacts } from '../../services/Contacts';

const Contacts = () => {
  const [contacts, setContacts] = useState<any>([])
  const [query, setQuery] = useState<string>('')

  const getContacts = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadContacts({
        termo: query
      })
      setContacts(data)
    } catch (error) {
      console.error(error)
    }
  },[query])

  useEffect(()=>{
    getContacts()
  },[getContacts])

  return(
    <div>
      <h1>Contatos</h1>

      <ul>
        {contacts.map((item:any) => (
          <li key={item.id}>{item.pessoa.nome}</li>
        ))}
      </ul>

    </div>
  )
}

export default Contacts;