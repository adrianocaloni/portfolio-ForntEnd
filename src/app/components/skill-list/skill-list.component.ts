import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  @Input()
  skill!: Skill;
  @Input()
  loading!: boolean;

  @Output() onEliminarSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onEditarSkill: EventEmitter<Skill> = new EventEmitter();

  name_skill: string ="";
  porcentaje: string = "";


  constructor() { }

  ngOnInit(): void {
  }
  
    //Eliminar un Skill 
    onEliminar(skill: Skill){
      this.onEliminarSkill.emit(skill)
    }

    
    onGuardar (skill: Skill){

    const editSkill = {
      name_skill: skill.name_skill,
      porcentaje: skill.porcentaje,
  
    }

    this.onEditarSkill.emit(editSkill); 
  }
    

}
