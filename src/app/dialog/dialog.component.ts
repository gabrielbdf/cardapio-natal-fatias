import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { ImageSrcPipe } from '../imageSrc.pipe';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    ImageSrcPipe,
    FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements AfterViewInit {

  @ViewChild('adicionaisView') adicionaisView!: MatSelectionList;
  readonly data = inject<any>(MAT_DIALOG_DATA);
  adicionais: string[] = ['Ferrero Rocher', 'Morango', 'Damasco', 'Fini', 'Kinder Bueno', 'Nozes', 'Suspiro'];
  selectedAdicionais: string[] = [];

  ngAfterViewInit(): void {
    if(!this.adicionaisView) return;
    this.adicionaisView.selectionChange.subscribe(() => {
      const maxAdicionais = 3
      this.adicionaisView.options.forEach(option => {
        const maxAdicionaisReached = this.adicionaisView.selectedOptions.selected.length >= maxAdicionais;
        option.disabled = maxAdicionaisReached && !option.selected;
      });
    });
  }


  enviarPedido() {
    const adicionais = this.selectedAdicionais?.map((adicional: any) => `*${adicional}*`).join(', ');
    let orderString = `Olá, eu gostaria de pedir: ${this.data.categoria} ${this.data.title}`;
    if(this.selectedAdicionais.length > 0) {
      orderString = `${orderString}\nAdicionais de: ${adicionais}`;
    }
    const url = `https://api.whatsapp.com/send?phone=5521981978344&text=${encodeURIComponent(orderString)}`;
    window.open(url, "_blank");
  }

}
