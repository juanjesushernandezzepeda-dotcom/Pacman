import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  correo: string = '';

  contrasena: string = '';
  confirmarContrasena: string = '';

  mostrarContrasena: boolean = false;

  foto: string | null = null;


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


  validarUsuario(
    usuario: string
  ): boolean {

    const formato =
      /^[a-zA-Z0-9_]{3,20}$/;

    return formato.test(usuario);

  }


  validarCorreo(
    correo: string
  ): boolean {

    const formato =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return formato.test(correo);

  }


  quitarEspaciosContrasena(
    evento: any
  ) {

    let valor =
      evento.detail?.value || '';

    valor =
      valor.replace(/\s/g, '');

    valor =
      valor.substring(0, 20);

    this.contrasena = valor;

  }


  quitarEspaciosConfirmacion(
    evento: any
  ) {

    let valor =
      evento.detail?.value || '';

    valor =
      valor.replace(/\s/g, '');

    valor =
      valor.substring(0, 20);

    this.confirmarContrasena =
      valor;

  }


  async mostrarMensaje(
    mensaje: string,
    color: string = 'warning'
  ) {

    const toast =
      await this.toastController.create({

        message: mensaje,
        duration: 2500,
        position: 'bottom',
        color: color

      });

    await toast.present();

  }


  /*
    POR AHORA NO MUESTRAN NINGÚN
    MENSAJE.

    DESPUÉS LOS CONECTAREMOS CON
    LA CÁMARA REAL DE ANDROID.
  */

  tomarFoto() {

  }


  elegirGaleria() {

  }


  async registrarse() {

    const nombreLimpio =
      this.nombre.trim();

    const correoLimpio =
      this.correo.trim().toLowerCase();


    if (nombreLimpio === '') {

      await this.mostrarMensaje(
        'Ingresa un nombre de usuario'
      );

      return;

    }


    if (
      !this.validarUsuario(nombreLimpio)
    ) {

      await this.mostrarMensaje(
        'El usuario debe tener entre 3 y 20 caracteres y solo puede contener letras, números y guion bajo'
      );

      return;

    }


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
        'Ingresa una contraseña'
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


    if (
      this.confirmarContrasena === ''
    ) {

      await this.mostrarMensaje(
        'Confirma tu contraseña'
      );

      return;

    }


    if (
      this.contrasena !==
      this.confirmarContrasena
    ) {

      await this.mostrarMensaje(
        'Las contraseñas no coinciden',
        'danger'
      );

      return;

    }


    /*
      DESPUÉS AQUÍ GUARDAREMOS
      EL USUARIO EN MYSQL.
    */

    await this.mostrarMensaje(
      'Jugador creado correctamente',
      'success'
    );

    this.router.navigate(['/login']);

  }

}