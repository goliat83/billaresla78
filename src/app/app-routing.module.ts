import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { HomeComponent } from './components/pages/home-component/home-component.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: ErrorPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 80]
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
