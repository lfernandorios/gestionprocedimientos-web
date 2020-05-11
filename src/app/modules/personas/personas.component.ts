import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/personas/persona';
import { PersonaService } from 'src/app/services/personas/persona.service'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})



export class PersonasComponent implements OnInit {

  personas:Persona[];
  persona:Persona=new Persona();
  errorServer:String;
  
  constructor(private personaService: PersonaService) {}


  ngOnInit(): void {
  }

  save() {
    this.personaService.addPersona(this.persona)
      .subscribe(data => { console.log(data); this.errorServer = "La persona fue creada" },
        error => {
          console.error(error);
          this.errorServer = error.error
        });
    this.persona = new Persona();
  }

  onSubmit() {
    this.save();
  }

}
