export interface IAuthService {
  checkisEmailExist(email: string): Promise<boolean>;
}
