import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-loans-style-two',
    templateUrl: './loans-style-two.component.html',
    styleUrls: ['./loans-style-two.component.scss']
})
export class LoansStyleTwoComponent {

    loansSlides: OwlOptions = {
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