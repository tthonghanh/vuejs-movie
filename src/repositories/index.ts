import axios from "axios";
import { Response, RefreshTokenResponse } from "./helper";

export class ApplicationRepository {
  public httpService;
  constructor() {
    this.httpService = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })
  }

  public async authorizeToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      const response : RefreshTokenResponse = await this.httpService.post('/auth/refreshToken', { refreshToken });
      if (response.success){
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return true;
      }
      else {
        localStorage.clear();
        location.href = '/auth'
      }
    }
    return false;
  }
}