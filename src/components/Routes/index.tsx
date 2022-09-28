import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { getUser } from '../../helpers/storage'

import { BaseLayout, EmptyLayout } from '../layouts'
import Profile from '../../pages/Profile'
import Auth from '../../pages/Auth'
import Users from '../../pages/Users'
import People from '../../pages/People'
import NotFound from '../../pages/NotFound'
import Contacts from '../../pages/Contacts'
import Logout from '../../pages/Auth/logout'
import Home from '../../pages/Home'

const RouteFactory = ():JSX.Element => {
  const navigate = useNavigate();
  const user = getUser()

  useEffect(()=> {
    if(!user) navigate("/login");
  },[user, navigate])

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="meu-cadastro" element={<Profile />} />
        <Route path="usuarios" element={<Users />} />
        <Route path="pessoas" element={<People />} />
        <Route path="contatos" element={<Contacts />} />
      </Route>
      <Route path="/" element={<EmptyLayout />}>
        <Route path="login" element={<Auth />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RouteFactory






