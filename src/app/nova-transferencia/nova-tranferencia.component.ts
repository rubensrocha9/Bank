import { Router } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output  } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  tranferir() {
    console.log('Tranferência Solicitada');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe(
        (resutado) => {
        console.log(resutado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
