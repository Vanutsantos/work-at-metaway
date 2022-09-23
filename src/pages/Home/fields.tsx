export const header = (handleModal:any) => ([
  {
    title: 'Email',
    object: 'email'
  },
  {
    title: 'Privado',
    object: 'privado'
  },
  {
    title: 'Tag',
    object: 'tag'
  },
  {
    title: 'Tipo',
    object: 'tipoContato'
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