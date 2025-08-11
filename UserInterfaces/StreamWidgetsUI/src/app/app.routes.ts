import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MainLayout } from './layout/main-layout/main-layout';
import { About } from './components/about/about';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About },
            { path: 'profile', component: Profile },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
];
