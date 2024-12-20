import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken')! ;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRole() && this.getToken();
  }

  public setUserName(userName: string) {
    localStorage.setItem('userName', userName);
  }

  public getUserName(): string {
    return localStorage.getItem('userName')! ;
  }

  public setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  public getUserId(): string {
    return localStorage.getItem('userId')! ;
  }

  
  public setRole(role: string) {
    localStorage.setItem('role', role);
  }

  public getRole(): string {
    return localStorage.getItem('role')! ;
  }

  
  public setToHome(toHome: string) {
    localStorage.setItem('toHome', toHome);
  }

  public getToHome(): string {
    return localStorage.getItem('toHome')! ;
  }

  public setLanguage(language: string) {
    localStorage.setItem('language', language);
  }

  public getLanguage(): string {
    return localStorage.getItem('language')! ;
  }

  

  
}
