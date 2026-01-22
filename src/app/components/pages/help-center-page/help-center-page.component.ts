import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-help-center-page',
    templateUrl: './help-center-page.component.html',
    styleUrls: ['./help-center-page.component.scss']
})
export class HelpCenterPageComponent {

    title = 'Help Center - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = 0; // Set to 0 to open the first section by default
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
            this.calculateContentHeight();
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
    calculateContentHeight(): void {
        const contentElement = document.querySelector('.accordion-content');
        if (contentElement) {
            this.contentHeight = contentElement.scrollHeight;
        }
    }

}