import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private url = 'http://localhost/api-php/cliente';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<ClienteModel[]>(this.url);
    }

    remove(id: any) {
        return this.http.delete(this.url + '/' + id)
    }

    create(cliente: ClienteModel) {
        return this.http.post(this.url, cliente);
    }

    update(cliente: ClienteModel, id: any) {
        return this.http.put(this.url + '/' + id, cliente);
    }
}
