import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []; 
  @Input()
  loading!: boolean;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
     this.skillService
     .getSkill()
     .subscribe((skills: Skill[]) => (this.skills = skills));
   }
  
   eliminarSkill(skill: Skill){
    this.skillService
    .deleteSkill(skill)
    .subscribe(
      () => (this.skills = this.skills.filter(s => s.id !== skill.id))
    );
  }

  agregarSkill(skill: Skill){
    this.skillService
    .addSkill(skill)
    .subscribe((skill) => this.skills.push(skill));  }

    
  editarSkill(skill: Skill, id:any){
    this.skillService
    .updateSkill(skill,skill.id)
    .subscribe();
  }
}