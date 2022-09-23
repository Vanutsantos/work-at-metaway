export const header = (handleModal:any) => ([
  {
    title: 'Nome',
    object: 'nome'
  },
  {
    title: 'CPF',
    object: 'cpf'
  },
  {
    title: 'Cidade',
    object: 'cidade'
  },
  {
    title: 'Estado',
    object: 'estado'
  },
  {
    title: '',
    object: '',
    actions: (value:any) => (
      <button className="action-button" onClick={() => {
        handleModal(value)
      }}>Visualizar</button>
    ),
  }
])