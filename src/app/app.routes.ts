import { Routes } from '@angular/router';
import { AboutComponent } from './pages/home/about/about.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { CareerComponent } from './pages/home/career/career.component';
import { EducationComponent } from './pages/home/education/education.component';
import { PortifolioComponent } from './pages/home/portifolio/portifolio.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'career',
        component: CareerComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'portfolio',
        component: PortifolioComponent
    }
];
