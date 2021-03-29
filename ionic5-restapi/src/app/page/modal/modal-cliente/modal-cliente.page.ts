import { ClienteModel } from './../../../model/cliente.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
    selector: 'app-modal-cliente',
    templateUrl: './modal-cliente.page.html',
    styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {
    @Input() cli: ClienteModel;
    atualizar = false;
    dados: ClienteModel;

    constructor(private modalCtrl: ModalController,
        private service: ClienteService) { }

    ngOnInit() {
        const dados = {
            nome: '',
            email: '',
            cidade: ''
        }
        if (this.cli) {
            // console.log("atualizar");
            this.atualizar = true;
            this.dados = this.cli;
        } else {
            this.dados = dados;
        }
    }

    fecharModal() {
        this.modalCtrl.dismiss();
    }

    enviando(form: NgForm) {
        // console.log(form.value);
        const cliente = form.value;
        if (this.atualizar) {
            this.service.update(cliente, this.cli.id).subscribe(response => {
                this.modalCtrl.dismiss(response);
            })
        } else {
            this.service.create(cliente).subscribe(response => {
                this.modalCtrl.dismiss(response);
            })
        }
    }

}
