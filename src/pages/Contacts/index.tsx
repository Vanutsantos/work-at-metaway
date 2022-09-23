import React, { useCallback, useEffect, useState } from 'react';
import ContactModal from '../../components/ContactModal';
import List from '../../components/List';
import Search from '../../components/Search';
import { loadContacts } from '../../services/Contacts';
import { header } from './fields';
import './styles.scss'

const Contacts = () => {
  const [contacts, setContacts] = useState<any>([])
  const [termo, setTermo] = useState<string>('')
  const [openModal, setOpenModal] = useState<any>(null)

  const getContacts = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadContacts({ termo })
      setContacts(data)
    } catch (error) {
      console.error(error)
    }
  },[termo])

  const handleModal = (value:any):void => {
    setOpenModal(value)
  }

  useEffect(()=>{
    getContacts()
  },[getContacts])

  return(
    <div className="container">
      <h1>Contatos</h1>

      <div className="header">
        <Search onSubmit={(e) => setTermo(e)} />
      </div>

      <List
        header={header(handleModal)}
        content={contacts}
      />

      {openModal !== null && 
        <ContactModal
          data={openModal}
          handleModal={handleModal}
        />
      }
  </div>
  )
}

export default Contacts;