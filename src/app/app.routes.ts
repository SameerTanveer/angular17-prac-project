import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'pages',
        loadChildren: () => import('./pages/pages.module').then(n => n.PagesModule),
        canMatch: [authGuard]
    },
];
