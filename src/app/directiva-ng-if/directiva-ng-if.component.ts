import { Component} from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if',
  templateUrl: './directiva-ng-if.component.html',
  styleUrls: ['./directiva-ng-if.component.css']
})
export class DirectivaNgIfComponent {
  personas: Persona[] = [
    new Persona('juan', 33),
    new Persona('ana', 15),
    new Persona('luis', 56),
    new Persona('carla', 45)
  ];

}
class Persona {
  constructor(public nombre: string, public edad: number) { }

  mayorEdad(): boolean {
    if (this.edad >= 18)
      return true;
    else
      return false;
  }
}



