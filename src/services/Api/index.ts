import axios from "axios";
import { CookieHelper } from "../../helpers/cookies";
import { settings } from "../../helpers/settings";

const api:any = axios.create({
  baseURL: settings.API_URL
});

api.interceptors.request.use(async (config:any) => {
  try {
    const accessToken = CookieHelper.get(settings.TOKEN);
    if(accessToken){
      Object.assign(config, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`
        }
      })
    }
    return Promise.resolve(config)
  } catch (e) {
    return Promise.resolve(config)
  }
})

export default api;