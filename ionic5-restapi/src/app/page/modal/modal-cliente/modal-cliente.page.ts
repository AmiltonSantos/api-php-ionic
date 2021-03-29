import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
    selector: 'app-modal-cliente',
    templateUrl: './modal-cliente.page.html',
    styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

    constructor(private modalCtrl: ModalController,
        private service: ClienteService) { }

    ngOnInit() {
    }

    fecharModal() {
        this.modalCtrl.dismiss();
    }

    enviando(form: NgForm) {
        // console.log(form.value);
        const cliente = form.value;
        this.service.create(cliente).subscribe(response =>{
            this.modalCtrl.dismiss(response);
        })
    }

}
