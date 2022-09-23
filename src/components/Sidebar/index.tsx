import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './styles.scss'
import { RiHome2Line, RiLogoutBoxLine, RiContactsBook2Line, RiMenuFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { IoIosPeople } from 'react-icons/io';



const Sidebar = ():JSX.Element => {
  const [close, setClose] = useState<boolean>(false)
  const location = useLocation()
  const items = [
    {
      id: 1,
      path: '/',
      title: 'Inicio',
      Icon: RiHome2Line
    },
    {
      id: 2,
      path: '/meu-cadastro',
      title: 'Meu cadastro',
      Icon: CgProfile
    },
    {
      id: 3,
      path: '/usuarios',
      title: 'Usuários',
      Icon: FiUsers
    },
    {
      id: 4,
      path: '/pessoas',
      title: 'Pessoas',
      Icon: IoIosPeople
    },
    {
      id: 5,
      path: '/contatos',
      title: 'Contatos',
      Icon: RiContactsBook2Line
    },
    // {
    //   id: 6,
    //   path: '/logout',
    //   title: 'Sair',
    //   Icon: RiLogoutBoxLine
    // },
  ]

  return(
    <div className={`sidebar ${close ? 'close':''}`}>
      <button 
        className='menu-handler'
        type='button'
        onClick={() => setClose((prev:any) => !prev)}
      >
        <RiMenuFill />
      </button>
      <ul>
        {items.map((item:any) => (
          <li key={item.id} className={`${item.path === location.pathname ? 'active' :''} ${close ? 'close':''}`}>
            <Link to={item.path}>
              <item.Icon />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
