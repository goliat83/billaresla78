import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog-details-without-sidebar-page',
    templateUrl: './blog-details-without-sidebar-page.component.html',
    styleUrls: ['./blog-details-without-sidebar-page.component.scss']
})
export class BlogDetailsWithoutSidebarPageComponent {

    title = 'Banking at Your Fingertips: The Rise of Digital Banking - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}