import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  	heading = 'About Us';
	paragraph = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque sunt in culpa qui officia deserunt mollit anim id est laborum';
	aboutHeading1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elite storium paralate';
	aboutHeading2 = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	aboutParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.';

	public aboutListing;
	constructor() { 

		this.aboutListing = [
			{ 
	  			'name' : 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
	  		},
	  		{ 
	  			'name' : 'Duis aute irure dolor in reprehenderit in voluptate velit.' 
	  		},
	  		{ 
	  			'name' : 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.' 
	  		}
		];

	}

	ngOnInit() {
	}

}

