import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-investment-funds-page',
    templateUrl: './investment-funds-page.component.html',
    styleUrls: ['./investment-funds-page.component.scss']
})
export class InvestmentFundsPageComponent {

    title = 'Investment Funds - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}