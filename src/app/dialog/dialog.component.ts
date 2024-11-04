import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ImageSrcPipe } from '../imageSrc.pipe';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    ImageSrcPipe,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.data);
  }
  readonly data = inject<any>(MAT_DIALOG_DATA);
  adicionais: string[] = ['Ferrero Rocher', 'Morango', 'Damasco', 'Fini', 'Kinder Bueno', 'Nozes', 'Suspiro'];
}
