import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { UserModel } from '../../models/user.model';
import { loadUsers } from '../../services/Users';

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([])

  useEffect(()=>{
    (async()=>{
      try {
        const response = await loadUsers({
          "termo": ""
        })
        setUsers(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  },[])

  

  return(
    <div className="container">
      <h1>Users</h1>
      <List/>
    </div>
  )
}

export default Users;