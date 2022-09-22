import api from "../Api";

export const loadPeople = (body:any) => api.post('/pessoa/pesquisar', body)
