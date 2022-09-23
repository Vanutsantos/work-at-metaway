import React, { useCallback, useEffect, useState } from 'react';
import List from '../../components/List';
import PeopleModal from '../../components/PeopleModal';
import Search from '../../components/Search';
import { loadPeople } from '../../services/People';
import { header } from './fields';
import './styles.scss'

const People = () => {
  const [people, setPeople] = useState<any>([])
  const [nome, setNome] = useState<string>('')
  const [openModal, setOpenModal] = useState<any>(null)

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

  const handleModal = (value:any):void => {
    setOpenModal(value)
  }

  useEffect(()=>{
    getPeople()
  },[getPeople])

  return(
    <div className="container">
      <h1>Pessoas</h1>

      <div className="header">
        <Search onSubmit={(e) => setNome(e)} />
      </div>

      <List
        header={header(handleModal)}
        content={people}
      />

      {openModal !== null && 
        <PeopleModal
          data={openModal}
          handleModal={handleModal}
        />
      }
    </div>
  )
}
export default People;