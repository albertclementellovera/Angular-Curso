import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado!:string;

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });

  submit() {
    if (this.formAlumno.value.notas?.nota1 &&
    typeof this.formAlumno.value.notas?.nota1 === 'string'){
      let nota1=parseInt(this.formAlumno.value.notas.nota1);
      if (this.formAlumno.value.notas?.nota2 &&
        typeof this.formAlumno.value.notas?.nota2 === 'string'){
          let nota2=parseInt(this.formAlumno.value.notas.nota2);
          if (this.formAlumno.value.notas?.nota3 &&
          typeof this.formAlumno.value.notas?.nota3 === 'string'){
            let nota3=parseInt(this.formAlumno.value.notas.nota3);
            if (nota1>=4 && nota2>=4 && nota3>=4)
              this.resultado="El alumno queda aprobado por esas notas";
            else
              this.resultado="El alumno no aprueba por esas notas";
          }
      }
    }else
      this.resultado="Debe especificar las 3 notas";
  }
}
