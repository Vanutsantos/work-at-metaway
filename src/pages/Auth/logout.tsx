import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearStorage } from '../../helpers/storage'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    clearStorage()
    navigate('/login')
  }, [navigate])

  return null
}

export default Logout
