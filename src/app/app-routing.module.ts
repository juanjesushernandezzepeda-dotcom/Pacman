import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Pantalla inicial de la aplicación
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module')
        .then(m => m.LoginPageModule)
  },

  // Registro
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/registro/registro.module')
        .then(m => m.RegistroPageModule)
  },

  // Recuperar contraseña
  {
    path: 'recuperar-password',
    loadChildren: () =>
      import('./pages/recuperar-password/recuperar-password.module')
        .then(m => m.RecuperarPasswordPageModule)
  },

  // Menú principal
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module')
        .then(m => m.MenuPageModule)
  },

  // Perfil
  {
    path: 'perfil',
    loadChildren: () =>
      import('./pages/perfil/perfil.module')
        .then(m => m.PerfilPageModule)
  },

  // Modos de juego
  {
    path: 'modos-juego',
    loadChildren: () =>
      import('./pages/modos-juego/modos-juego.module')
        .then(m => m.ModosJuegoPageModule)
  },

  // Rankings
  {
    path: 'rankings',
    loadChildren: () =>
      import('./pages/rankings/rankings.module')
        .then(m => m.RankingsPageModule)
  },

  // Juego
  {
    path: 'juego',
    loadChildren: () =>
      import('./pages/juego/juego.module')
        .then(m => m.JuegoPageModule)
  },

  // Home
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module')
        .then(m => m.HomePageModule)
  },

  // Si alguien escribe una ruta que no existe,
  // lo manda al login
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }