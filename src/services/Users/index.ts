import {  UserResponseModel } from "../../models/user.model";
import api from "../Api";

export const loadUsers = (body:any):Promise<UserResponseModel> => api.post('/usuario/pesquisar', body)

export const loadUserById = (id:number) => api.get(`/usuario/buscar/${id}`)