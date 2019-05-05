import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'years', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'months', loadChildren: './months/months.module#MonthsPageModule' },
  { path: 'years', loadChildren: './years/years.module#YearsPageModule' },
  { path: 'weeks', loadChildren: './weeks/weeks.module#WeeksPageModule' },
  { path: 'days', loadChildren: './days/days.module#DaysPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
