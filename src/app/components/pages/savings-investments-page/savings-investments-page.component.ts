import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-savings-investments-page',
    templateUrl: './savings-investments-page.component.html',
    styleUrls: ['./savings-investments-page.component.scss']
})
export class SavingsInvestmentsPageComponent {

    title = 'Savings & Investments - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}