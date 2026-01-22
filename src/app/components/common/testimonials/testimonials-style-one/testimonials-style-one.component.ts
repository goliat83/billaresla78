import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials-style-one',
    templateUrl: './testimonials-style-one.component.html',
    styleUrls: ['./testimonials-style-one.component.scss']
})
export class TestimonialsStyleOneComponent {

    constructor(
        public router: Router
    ) { }

    testimonialsSlides: OwlOptions = {
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
			695: {
				items: 1
			},
			935: {
				items: 2
			},
			1115: {
				items: 2
			},
			1320: {
				items: 2
			}
		}
    }

}