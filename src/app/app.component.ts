import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conversion!: string;
  potenciaNumero!: number;
  cantidad!: number;

  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });

  submit() {

      if (this.formularioConversion.value.numerodecimal &&
        typeof this.formularioConversion.value.numerodecimal === 'string'){
          if (this.formularioConversion.value.base == "hexadecimal"){
            this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(16);
          }
          if (this.formularioConversion.value.base == "octal"){
            this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(8);
          }

          if (this.formularioConversion.value.potencia &&
            typeof this.formularioConversion.value.potencia === 'string'){
            this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numerodecimal), parseInt(this.formularioConversion.value.potencia));
          }

          if (this.formularioConversion.value.largo)
          this.cantidad = this.formularioConversion.value.numerodecimal.length;
        }
  }
}
