import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import { UserModel } from '../../models/user.model';
import { loadUsers } from '../../services/Users';
import { header } from './fields';

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([])
  const [termo, setTermo] = useState<string>('')

  const getUsers = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadUsers({ termo })
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  },[termo])

  useEffect(()=>{
    getUsers()
  },[getUsers])

  return(
    <div className="container">
      <h1>Usuários</h1>

      <Search onSubmit={(e) => setTermo(e)} />

      <List
        header={header}
        content={users}
      />
    </div>
  )
}

export default Users;