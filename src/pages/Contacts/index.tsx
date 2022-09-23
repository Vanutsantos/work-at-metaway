import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import { loadContacts } from '../../services/Contacts';
import { header } from './fields';

const Contacts = () => {
  const [contacts, setContacts] = useState<any>([])
  const [termo, setTermo] = useState<string>('')

  const getContacts = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadContacts({ termo })
      setContacts(data)
    } catch (error) {
      console.error(error)
    }
  },[termo])

  useEffect(()=>{
    getContacts()
  },[getContacts])

  return(
    <div className="container">
      <h1>Contatos</h1>

      <Search onSubmit={(e) => setTermo(e)} />

      <List
        header={header}
        content={contacts}
      />
  </div>
  )
}

export default Contacts;