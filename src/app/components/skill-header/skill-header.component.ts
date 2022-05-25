import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skill-header',
  templateUrl: './skill-header.component.html',
  styleUrls: ['./skill-header.component.css']
})
export class SkillHeaderComponent implements OnInit {

  @Input()
  skill!: Skill
  @Input()
  loading!: boolean;

  @Output() onGuardarSkill: EventEmitter<Skill> = new EventEmitter();

  
  name_skill: string ="";
  porcentaje: string = "";


  constructor( ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.name_skill) {
      alert('Por favor, ingrese la Skill - Hard or Soft');
      return;
    }
    const newSkill = {
      name_skill: this.name_skill,
      porcentaje: this.porcentaje

    }

    this.onGuardarSkill.emit(newSkill);

    this.name_skill = '';
    this.porcentaje = '';

  }
}