import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-investment-benefits',
    templateUrl: './investment-benefits.component.html',
    styleUrls: ['./investment-benefits.component.scss']
})
export class InvestmentBenefitsComponent {

    constructor(
        public router: Router
    ) { }

}