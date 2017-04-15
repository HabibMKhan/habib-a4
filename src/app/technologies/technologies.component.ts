import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

	arr = [
		'C++',
		'Java',
		'Python',
		'JavaScript'
	]

	isLying = true

	lyingArr = [
		'TypeScript',
		'Ruby',
		'Fortran'
	]

  constructor() { }

  ngOnInit() {

  }

}
