import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
clientes: ClienteModel = <any>[];

  constructor(private service: ClienteService) { }

  ngOnInit() {
      this.service.getAll().subscribe(response => {
          this.clientes = response;
      })
  } 
}
