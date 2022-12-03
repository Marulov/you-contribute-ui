import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ImportComponent} from "./import/import.component";
import {RepositoryComponent} from "./repository/repository.component";
import {IssueComponent} from "./issue/issue.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'import', component: ImportComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: 'issue', component: IssueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
