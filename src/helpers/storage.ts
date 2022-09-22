import Cookie from 'js-cookie'
import { settings } from './settings'

export const addLocalStorage = (key:string, value:string) => {
  return new Promise(({resolve, reject}:any) => {
    try {
      localStorage.setItem(key, value)
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

export const getLocalStorage = (key:string) => {
  return localStorage.getItem(key)
}

export const removeLocalStorage = (key:string) => {
  return localStorage.removeItem(key)
}

export const getUser = () => {
  const user = getLocalStorage('user') || null
  if(user) return JSON.parse(user)
 return null
}

export const setUser = async (user:any) => {
  await addLocalStorage('user', JSON.stringify(user))
}

export const removeUser = () => {
  removeLocalStorage('user')
}

export const clearStorage = () => {
  localStorage.clear()

  Object.keys(sessionStorage).forEach((item) => {
    if (!item.includes('utm')) sessionStorage.removeItem(item)
  })

  Object.keys(Cookie.get()).forEach((item) => {
    Cookie.remove(item)
  })

  Cookie.remove(settings.TOKEN, {
    domain: settings.DOMAIN
  })
}
