import { Component } from '@angular/core';

@Component({
    selector: 'app-investments-solutions',
    templateUrl: './investments-solutions.component.html',
    styleUrls: ['./investments-solutions.component.scss']
})
export class InvestmentsSolutionsComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}