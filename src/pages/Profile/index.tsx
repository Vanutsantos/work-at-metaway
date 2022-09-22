import React, { useCallback, useEffect, useState } from 'react';
import { getUser } from '../../helpers/storage';
import { loadUserById } from '../../services/Users';

const Profile = () => {
  const [data, setData] = useState<any>(null)
  const {id} = getUser()

  const getUserById = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadUserById(id)
      setData(data.object.usuario)
    } catch (error) {
      console.error(error)
    }
  },[id])

  useEffect(()=>{
    getUserById()
  },[getUserById])

  console.log(data)

  return(
    <div>
      <h1>Perfil</h1>
      {data && <>
        <h3>Nome:{data.nome}</h3>
        <h3>Email:{data.email}</h3>
      </>}
     
    </div>
  )
}

export default Profile;