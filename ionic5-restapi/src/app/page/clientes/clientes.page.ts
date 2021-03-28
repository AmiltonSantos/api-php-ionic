import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.page.html',
    styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
    clientes: ClienteModel[];

    constructor(private service: ClienteService) { }

    ngOnInit() {
        this.service.getAll().subscribe(response => {
            this.clientes = response;
        })
    }

    remover(id: any) {
        this.service.remove(id).subscribe(() => {
            // this.clientes = this.clientes.filter(idcliente => idcliente.id !== id);
            this.service.getAll().subscribe(response => {
                this.clientes = response;
            })
        })
    }
}
