import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  private key = CryptoJS.enc.Utf8.parse(environment.Encrypt);
  private iv = CryptoJS.enc.Utf8.parse(environment.IV);

  constructor() { }

  Encryption(data: any){
    var encryptedData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), this.key, {
      keysize: 128/8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString();
  }

  Decrypt(data: any){
    var decryptedData = CryptoJS.AES.decrypt(data, this.key, {
      keysize: 128/8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return  decryptedData.toString(CryptoJS.enc.Utf8);
  }
}
