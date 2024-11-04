import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ImageSrcPipe } from "./imageSrc.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatButtonModule,
    ImageSrcPipe
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  dialog = inject(MatDialog)

  categorias = [
    {
      title: "Guirlandas",
      description: "Uma deliciosa Guirlanda feita com massa de brownie e recheada com as opções irresistíveis",
      items: [
        {
          title: "Ninho com Morango e Nozes",
          description: "Massa de brownie e cobertura de ninho com morango e nozes",
          adicionais: true,
          valor: 80
        },
        {
          title: "Brigadeiro com Ferreiro Rocher",
          description: "Brigadeiro com Ferrero Rocher e raspas de chocolate",
          adicionais: true,
          valor: 80
        },
        {
          title: "Doce de Leite com Kinder Bueno",
          description: "Doce de leite com pedaços de Kinder Bueno e suspiros",
          adicionais: true,
          valor: 80
        },
      ]
    },
    {
      title: "Pudins",
      description: "Pudins irresistíveis, preparados com ingredientes da mais alta qualidade",
      items: [
        {
          title: "Pudim Tradicional",
          description: "Clássico de leite condensado, com caramelo aveludado e um toque suave de especiarias",
          valor: 60
        },
        {
          title: "Pudim Ninho com Caramelo",
          description: "Pudim cremoso de leite ninho, coberto com caramelo artesanal e finalizado com nozes e amêndoas",
          valor: 70
        },
      ]
    },
    {
      title: "Tortas",
      description: "Tortas incomparáveis, feitas com ingredientes selecionados para oferecer a melhor experiência de sabor",
      items: [
        {
          title: "Brownie com Uva",
          description: "Torta irresistível de brownie, com o doce do chocolate e a frescura das uvas, finalizada com raspas de chocolate e toque de hortelã.",
          valor: 80
        },
        {
          title: "Torta de Limão",
          description: "Torta de Limão refrescante, decorada com frutas vermelhas e pequenos suspiros para um toque festivo",
          valor: 80
        },
      ]
    },
    {
      title: "Outros",
      description: "Receitas únicas, preparadas com ingredientes de primeira, para uma experiência de sabor inesquecível ",
      items: [
        {
          title: "Pavê de Chocolate",
          description: "Pavê de chocolate cremoso com biscoitos, finalizado com Ferrero Rocher e Nozes",
          valor: 75
        },
        {
          title: "Banoffee",
          description: "Camadas de banana, doce de leite e chantilly sobre base crocante, finalizado com raspas de chocolate meio amargo e toque de canela",
          valor: 100
        },
      ]
    }
  ]

  title = 'Cardápio de Natal';

  openDialog(item: any) {
    this.dialog.open(DialogComponent, {
      data: item,
      panelClass: 'slide-from-bottom-dialog'
    });
  }


 
}
