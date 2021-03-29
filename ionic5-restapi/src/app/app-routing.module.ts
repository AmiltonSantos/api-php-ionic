import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    loadChildren: () => import('./page/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'modal-cliente',
    loadChildren: () => import('./page/modal/modal-cliente/modal-cliente.module').then( m => m.ModalClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
