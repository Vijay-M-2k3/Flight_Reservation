import { Injectable } from '@angular/core';
import { EncryptDecryptService } from './encrypt-decrypt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  decryptedData: any;

  constructor(
    private router: Router,
    private encryptDecrypt: EncryptDecryptService,
  ) { }

  checkUrl(Id: number){
    if (sessionStorage.getItem('Token') != null && localStorage.getItem('Token') == null) {
      this.decryptedData = this.encryptDecrypt.Decrypt(sessionStorage.getItem('Token'))
      if (JSON.parse(this.decryptedData).UserType == Id) {
        sessionStorage.setItem('BrowserData', this.encryptDecrypt.Encryption(JSON.stringify(this.router.url)));
        return true;
      }
      else {
        return false;
      }
    }
    else if (localStorage.getItem('Token') != null && sessionStorage.getItem('Token') == null) {
      this.decryptedData = this.encryptDecrypt.Decrypt(localStorage.getItem('Token'))
      if (JSON.parse(this.decryptedData).UserType == Id) {
        localStorage.setItem('BrowserData', this.encryptDecrypt.Encryption(JSON.stringify(this.router.url)));
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  getUserId(){
    return JSON.parse(this.decryptedData).UserId;
  }
}
