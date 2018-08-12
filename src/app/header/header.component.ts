import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items;
  currentLink = 'Home';
  constructor() { 
		this.items = [
	  		{ 
	  			path : '#about',
	  			'name' : 'About me' 
	  		},
	  		{ 
	  			path : '#skill',
	  			'name' : 'Skill' 
	  		},
	  		{ 
	  			path : '#works',
	  			'name' : 'Portfolio' 
	  		},
	  		{ 
	  			path : '#section-contact',
	  			'name' : 'Contact' 
	  		}
	  	];
	}

	activatedLink(clickedLink){
		//console.log(clickedLink);
		this.currentLink = clickedLink;
	}

  ngOnInit() {
  }

}
