import api from "../Api";

export const loadUsers = (body:any):Promise<any> => api.post('/usuario/pesquisar', body)

export const loadUserById = (id:number) => api.get(`/usuario/buscar/${id}`)

export const postUser = (body:any):Promise<any> => api.post('/usuario/salvar', body)

export const updateUser = (body:any):Promise<any> => api.put('/usuario/atualizar', body)