import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
  standalone: false
})
export class RecuperarPasswordPage implements OnInit {

  correo: string = '';

  codigo: string = '';

  nuevaContrasena: string = '';
  confirmarContrasena: string = '';

  mostrarContrasena: boolean = false;

  codigoEnviado: boolean = false;


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


  validarCorreo(
    correo: string
  ): boolean {

    const formato =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return formato.test(correo);

  }


  /*
    IMPIDE ESCRIBIR LETRAS
    DESDE EL TECLADO
  */

  permitirSoloNumeros(
    evento: KeyboardEvent
  ) {

    const teclasPermitidas = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab'
    ];


    if (
      teclasPermitidas.includes(
        evento.key
      )
    ) {

      return;

    }


    if (
      !/^[0-9]$/.test(
        evento.key
      )
    ) {

      evento.preventDefault();

    }

  }


  /*
    TAMBIÉN LIMPIA EL VALOR
    SI EL USUARIO PEGA LETRAS.
  */

  soloNumerosCodigo(
    evento: any
  ) {

    let valor =
      evento.detail?.value || '';

    valor =
      valor.replace(/[^0-9]/g, '');

    valor =
      valor.substring(0, 6);

    this.codigo = valor;

  }


  quitarEspaciosNuevaContrasena(
    evento: any
  ) {

    let valor =
      evento.detail?.value || '';

    valor =
      valor.replace(/\s/g, '');

    valor =
      valor.substring(0, 20);

    this.nuevaContrasena =
      valor;

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
        duration: 2300,
        position: 'bottom',
        color: color

      });

    await toast.present();

  }


  async enviarCodigo() {

    const correoLimpio =
      this.correo.trim().toLowerCase();


    if (correoLimpio === '') {

      await this.mostrarMensaje(
        'Ingresa tu correo electrónico'
      );

      return;

    }


    if (
      !this.validarCorreo(
        correoLimpio
      )
    ) {

      await this.mostrarMensaje(
        'Ingresa un correo electrónico válido'
      );

      return;

    }


    /*
      DESPUÉS PHP GENERARÁ
      EL CÓDIGO REAL.
    */

    this.codigoEnviado = true;


    await this.mostrarMensaje(
      'Código de verificación enviado',
      'success'
    );

  }


  async cambiarContrasena() {

    if (!this.codigoEnviado) {

      await this.mostrarMensaje(
        'Primero solicita el código de verificación'
      );

      return;

    }


    if (
      !/^[0-9]{6}$/.test(
        this.codigo
      )
    ) {

      await this.mostrarMensaje(
        'El código debe contener exactamente 6 números'
      );

      return;

    }


    if (
      this.nuevaContrasena === ''
    ) {

      await this.mostrarMensaje(
        'Ingresa una nueva contraseña'
      );

      return;

    }


    if (
      this.nuevaContrasena.length < 8
    ) {

      await this.mostrarMensaje(
        'La contraseña debe tener mínimo 8 caracteres'
      );

      return;

    }


    if (
      this.nuevaContrasena.length > 20
    ) {

      await this.mostrarMensaje(
        'La contraseña no puede tener más de 20 caracteres'
      );

      return;

    }


    if (
      this.nuevaContrasena !==
      this.confirmarContrasena
    ) {

      await this.mostrarMensaje(
        'Las contraseñas no coinciden',
        'danger'
      );

      return;

    }


    /*
      DESPUÉS PHP VALIDARÁ
      EL CÓDIGO REAL Y CAMBIARÁ
      LA CONTRASEÑA EN MYSQL.
    */

    await this.mostrarMensaje(
      'Contraseña actualizada correctamente',
      'success'
    );


    this.router.navigate(['/login']);

  }

}