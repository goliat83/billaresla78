import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-loan-page',
    templateUrl: './home-loan-page.component.html',
    styleUrls: ['./home-loan-page.component.scss']
})
export class HomeLoanPageComponent {

    title = 'Home Loan - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}