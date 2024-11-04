import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appImageSrc',
  standalone: true,
})
export class ImageSrcPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value
    .toString()                         // Garantir que é uma string
    .toLowerCase()                      // Converter para minúsculas
    .trim()                             // Remover espaços extras nas extremidades
    .replace(/\s+/g, '-')               // Substituir espaços por hífens
    .replace(/[^\w\-]+/g, '')           // Remover caracteres especiais
    .replace(/\-\-+/g, '-')
    return `/assets/produtos/${value}.jpeg`;
  }

}
