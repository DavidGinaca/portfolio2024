
import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { ExpComponent } from './components/exp/exp.component';
import { HabilityComponent } from './components/hability/hability.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [

    {path:'', component: HeaderComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'educacion', component: EducationComponent},
    {path:'experiencia', component: ExpComponent},
    {path:'habilidades', component: HabilityComponent},
    {path:'contacto', component: FormComponent}

];
