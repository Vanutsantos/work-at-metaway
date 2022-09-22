import api from "../Api";

export const loadContacts = (body:any) => api.post('/contato/pesquisar', body)
