export type UserModel = {
  cpf: string
  dataNascimento: string
  email: string
  id: number
  nome: string
  password: string
  telefone: string
  username: string
}

export type UserResponseModel = {
  data: UserModel[]
}