import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import { loadPeople } from '../../services/People';
import { header } from './fields';

const People = () => {
  const [people, setPeople] = useState<any>([])
  const [nome, setNome] = useState<string>('')

  const getPeople = useCallback(async (): Promise<void> => {
    try {
      const { data } = await loadPeople({ nome })
      const dataMod = data.map((item:any) => ({
        ...item,
        cidade: item?.endereco?.cidade,
        estado: item?.endereco?.estado,
      }))
      setPeople(dataMod)
    } catch (error) {
      console.error(error)
    }
  },[nome])

  useEffect(()=>{
    getPeople()
  },[getPeople])

  return(
    <div className="container">
      <h1>Pessoas</h1>

      <Search onSubmit={(e) => setNome(e)} />

      <List
        header={header}
        content={people}
      />
    </div>
  )
}
export default People;