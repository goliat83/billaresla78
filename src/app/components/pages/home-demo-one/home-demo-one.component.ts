import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-demo-one',
    templateUrl: './home-demo-one.component.html',
    styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent {

    title = 'Tartu - Angular 17 Tailwind Banking & Money Transfer Template';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}