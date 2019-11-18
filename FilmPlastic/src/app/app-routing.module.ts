import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListeComponent } from './film-liste/film-liste.component';
import { RechercheComponent } from './recherche/recherche.component';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/maliste' },
{ path: 'maliste', component: FilmListeComponent},
{ path: 'recherche', component: RechercheComponent },
//{ path: 'posts/:postId', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
