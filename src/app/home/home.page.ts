import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
public botones=[
  {
    text:'Botón 1',
    role: 'destructive',
    data:{
      action:'delete',
    },
  },
  {
    text: 'share', 
    data: {
      action: 'share',
    },
  },
  {
    text: 'cancelar',
    role: 'cancel',
    data: {
      action: 'cancel',
    },
  },
  {
    text: 'guardar',
    data: {
      action: 'guardar',
    },
  }
]
}
