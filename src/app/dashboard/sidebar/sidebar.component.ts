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

  		// { 
  		// 	'path' : '/dashboard',
  		// 	'icon' : 'lnr-home',
  		// 	'name' : 'Dashboard' 
  		// },
  		{ 
        id     : 'adminAbout',
  			'path' : '/dashboard#about',
  			'icon' : 'lnr-code',
  			'name' : 'About me' 
  		},
  		{ 
        id     : 'adminSkill',
  			'path' : '/dashboard#skill',
  			'icon' : 'lnr-cog',
  			'name' : 'Skills' 
  		},
  		{ 
        id     : 'adminPortfolio',
  			'path' : '/dashboard#portfolio',
  			'icon' : 'lnr-chart-bars',
  			'name' : 'Portfolio' 
  		},
  		{ 
        id     : 'adminContact',
  			'path' : '/dashboard#contact',
  			'icon' : 'lnr-chart-bars',
  			'name' : 'Contact' 
  		}

  	];
	}

  activatedLink(clickedLink){
		//console.log(clickedLink);
		this.currentLink = clickedLink;
    // $('#about').hide();
    // $('#skill').show();
    // $('#portfolio').hide();
    // $('#contact').hide();
    
    //$('.sidebar-container').hide();
    
  }

	

  ngOnInit() {
  }

}
