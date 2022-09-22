import Cookie from 'js-cookie'
import { settings } from './settings'

export class CookieHelper {
  static add(key: string, value: any): void | Error {
    if (!key) {
      return new Error('Key not found')
    }
    if (!value) {
      return new Error('Value not found')
    }

    Cookie.set(key, value, {
      domain: settings.DOMAIN
    })
  }

  static get = (key: string): any => Cookie.get(key)

  static remove = (key: string): void => Cookie.remove(key)
}
