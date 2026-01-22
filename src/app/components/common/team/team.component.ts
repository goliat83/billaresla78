import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {

    teamSlides: OwlOptions = {
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
				items: 2
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