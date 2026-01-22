import { Component } from '@angular/core';

@Component({
    selector: 'app-sdp-features',
    templateUrl: './sdp-features.component.html',
    styleUrls: ['./sdp-features.component.scss']
})
export class SdpFeaturesComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}