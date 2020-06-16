import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];
const urls =[];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  addUrl(newUrl: string) {
    if (newUrl) {
      urls.push(newUrl);
    }
  }
}
