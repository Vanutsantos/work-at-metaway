export const header = (handleModal:any) => ([
  {
    title: 'Nome',
    object: 'nome'
  },
  {
    title: 'Data de nascimento',
    object: 'dataNascimento'
  },
  {
    title: 'CPF',
    object: 'cpf'
  },
  {
    title: 'Email',
    object: 'email'
  },
  {
    title: 'Telefone',
    object: 'telefone'
  },
  {
    title: 'Username',
    object: 'username'
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