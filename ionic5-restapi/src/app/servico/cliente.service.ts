import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
private url = 'http://localhost/phpionic/cliente';

  constructor(private http: HttpClient) { }

  getAll(){
      return this.http.get<ClienteModel>(this.url);
  }
}
