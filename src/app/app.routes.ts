import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';

import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-log-in/user-log-in.component';

//GUARDS
import { authGuard } from './shared/guards/auth.guard';
import { adminRoleGuard } from './shared/guards/admin-role.guard';
import { RestrictedContentComponent } from './components/restricted-content/restricted-content.component';

export const routes: Routes = [
    {path: 'for-directive-example', component: ForDirectiveExampleComponent },
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent},
    {path: 'template-driven-form-example', component: TemplateDrivenFormComponent},
    {path:'welcome', component: WelcomeComponent},
    {path: 'http-client-example', component: HttpClientExampleComponent},
    {path: 'user-registration-example', component: UserRegistrationComponent, canActivate: [authGuard, adminRoleGuard]},
    {path: 'login', component: UserLoginComponent},
    { path: 'restricted-content', component: RestrictedContentComponent},
    {path: 'reactive-form-example', component: ReactiveFormExampleComponent},
    {path: '', redirectTo: '/welcome', pathMatch:'full'}

];
