import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public navs;
  currentLink = 'Home';
  constructor() { 
		this.navs = [

  		{ 
  			'path' : '/dashboard',
  			'icon' : 'lnr-home',
  			'name' : 'Dashboard' 
  		},
  		{ 
  			'path' : '/about',
  			'icon' : 'lnr-code',
  			'name' : 'About me' 
  		},
  		{ 
  			'path' : '/dashboard/skill',
  			'icon' : 'lnr-cog',
  			'name' : 'Skills' 
  		},
  		{ 
  			'path' : '/dashboard/portfolio',
  			'icon' : 'lnr-chart-bars',
  			'name' : 'Portfolio' 
  		},
  		{ 
  			'path' : '/dashboard/contact',
  			'icon' : 'lnr-chart-bars',
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
