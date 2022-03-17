import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from "./auth/auth.component";
import {MainPageComponent} from "./main-page/main-page.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch:'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'main', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
