import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent {

    title = 'Banking at Your Fingertips: The Rise of Digital Banking - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}