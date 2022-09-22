import api from "../Api";

export const auth = (body:any) => api.post('/auth/login', body)