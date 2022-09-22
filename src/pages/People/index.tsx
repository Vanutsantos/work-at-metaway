import React, { useCallback, useEffect, useState } from 'react';
import { loadPeople } from '../../services/People';

const People = () => {
  const [people, setPeople] = useState<any>([])

  const getPeople = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadPeople({
        "termo": ""
      })
      setPeople(data)
    } catch (error) {
      console.error(error)
    }
  },[])

  useEffect(()=>{
    getPeople()
  },[getPeople])

  return(
    <div>
      <h1>Contatos</h1>

      <ul>
        {people.map((item:any) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>

    </div>
  )
}
export default People;