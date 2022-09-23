import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import UserModal from '../../components/UserModal';
import { loadUsers, postUser } from '../../services/Users';
import { header } from './fields';
import './styles.scss'

const Users = () => {
  const [users, setUsers] = useState<any>([])
  const [termo, setTermo] = useState<string>('')
  const [openModal, setOpenModal] = useState<any>(null)

  const getUsers = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadUsers({ termo })
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  },[termo])

  const createUser = async (body:any):Promise<void> => {
    try {
      const res = await postUser({
        tipos: [ body.tipo || 'ROLE_ADMIN' ],
        usuario: body
      })
      
      alert(res.data.message)
      setOpenModal(null)
    } catch (error:any) {
      alert(error.message)
      setOpenModal(null)
      console.error(error)
    }
  }

  const handleModal = (value:any):void => {
    setOpenModal(value)
  }

  useEffect(()=>{
    getUsers()
  },[getUsers])

  return(
    <div className="container">
      <h1>Usuários</h1>

      <div className="header">
        <Search onSubmit={(e) => setTermo(e)} />
        <button 
          className="add-item"
          onClick={() => setOpenModal(false)}
        >
          Adicionar usuário
        </button>
      </div>

      <List
        header={header(handleModal)}
        content={users}
      />

      {openModal !== null && 
        <UserModal
          data={openModal}
          handleModal={handleModal}
          onSubmit={createUser}
        />
      }
    </div>
  )
}

export default Users;