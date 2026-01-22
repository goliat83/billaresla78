import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-start-invest',
    templateUrl: './start-invest.component.html',
    styleUrls: ['./start-invest.component.scss']
})
export class StartInvestComponent {

    constructor(
        public router: Router
    ) { }

}