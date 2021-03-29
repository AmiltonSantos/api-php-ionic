import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteModel } from 'src/app/model/cliente.model';
import { ClienteService } from 'src/app/servico/cliente.service';
import { ModalClientePage } from '../modal/modal-cliente/modal-cliente.page';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.page.html',
    styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
    clientes: ClienteModel[];

    constructor(private service: ClienteService,
        private modalCtrl: ModalController) { }

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

    novoCliente() {
        this.modalCtrl.create({
            component: ModalClientePage
        }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
        }).then(({ data }) => {
            // console.log(data);
            this.service.getAll().subscribe(response => {
                this.clientes = response;
            })
        })
    }

    atualizar(cli: ClienteModel) {
        // console.log(cli);
        this.modalCtrl.create({
            component: ModalClientePage,
            componentProps: { cli }
        }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
        }).then(({ data }) => {
            // console.log(data);
            this.service.getAll().subscribe(response => {
                this.clientes = response;
            })
        })
    }
}
