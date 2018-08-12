import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  	public skills;

	constructor() { 
		this.skills = [
			{
				'name' : 'hi-icon-screen',
				'heading' :'HTML5',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			},
			{
				'name' : 'hi-icon-location',
				'heading' :'SCSS',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			},
			{
				'name' : 'hi-icon-images',
				'heading' :'Bootstrap',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			},
			{
				'name' : 'hi-icon-archive',
				'heading' :'jQuery/Javascript',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			},
			{
				'name' : 'hi-icon-contract',
				'heading' :'Angularjs',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			},
			{
				'name' : 'hi-icon-clock',
				'heading' :'Photoshop',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			},
			{
				'name' : 'hi-icon-clock',
				'heading' :'Responsive',
				'para' : 'Lorem ipsum dolor sit amet, elit persecuti efficiendi sit ad.'
			}
			
		];
	}

  ngOnInit() {
  }

}
