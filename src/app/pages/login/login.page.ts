import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  correo: string = '';
  contrasena: string = '';

  mostrarContrasena: boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }


  cambiarVisibilidad() {

    this.mostrarContrasena =
      !this.mostrarContrasena;

  }


  validarCorreo(correo: string): boolean {

    const formatoCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return formatoCorreo.test(correo);

  }


  quitarEspaciosContrasena(evento: any) {

    let valor =
      evento.detail?.value || '';

    valor =
      valor.replace(/\s/g, '');

    valor =
      valor.substring(0, 20);

    this.contrasena = valor;

  }


  async mostrarMensaje(
    mensaje: string,
    color: string = 'warning'
  ) {

    const toast =
      await this.toastController.create({

        message: mensaje,
        duration: 2200,
        position: 'bottom',
        color: color

      });

    await toast.present();

  }


  async iniciarSesion() {

    const correoLimpio =
      this.correo.trim().toLowerCase();


    if (correoLimpio === '') {

      await this.mostrarMensaje(
        'Ingresa tu correo electrónico'
      );

      return;

    }


    if (
      !this.validarCorreo(correoLimpio)
    ) {

      await this.mostrarMensaje(
        'Ingresa un correo electrónico válido'
      );

      return;

    }


    if (this.contrasena === '') {

      await this.mostrarMensaje(
        'Ingresa tu contraseña'
      );

      return;

    }


    if (
      this.contrasena.length < 8
    ) {

      await this.mostrarMensaje(
        'La contraseña debe tener mínimo 8 caracteres'
      );

      return;

    }


    if (
      this.contrasena.length > 20
    ) {

      await this.mostrarMensaje(
        'La contraseña no puede tener más de 20 caracteres'
      );

      return;

    }


    /*
      DESPUÉS AQUÍ VALIDAREMOS
      EL USUARIO CON PHP + MYSQL.
    */

    this.router.navigate(['/menu']);

  }

}