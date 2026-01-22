import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-solutions-style-one',
    templateUrl: './solutions-style-one.component.html',
    styleUrls: ['./solutions-style-one.component.scss']
})
export class SolutionsStyleOneComponent {

    solutionsSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			935: {
				items: 3
			},
			1115: {
				items: 3
			},
			1320: {
				items: 4
			}
		}
    }

}