import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import {UserJwtDto} from '../dto/UserJwtDto';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  public saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getUserFromToken(token:string) : UserJwtDto{
    return jwtDecode<UserJwtDto>(localStorage.getItem('token'));
  }
}
