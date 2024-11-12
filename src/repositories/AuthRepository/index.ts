import { ApplicationRepository } from "..";
import { LoginResponse } from "../helper";

export class AuthRepository extends ApplicationRepository {
  /**
   *
   */
  constructor() {
    super();
  }

  public async login(email: string, password: string) {
    try {
      const userLogin : LoginResponse = await this.httpService.post("/auth/login", { email, password });
      if (userLogin.success) {
        localStorage.setItem("accessToken", userLogin.data.accessToken);
        localStorage.setItem("refreshToken", userLogin.data.refreshToken);
        return userLogin;
      }
    } catch (error) {
      return error;
    }
  }
}