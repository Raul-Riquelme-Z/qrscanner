import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private navCtrl:NavController) { }

  async guardarRegistro(format:string,content:string)
  {
    const nuevoRegistro = new Registro(format,content);
    //Tarea 1: Guardar registros en la memoria del equipo (pligin storage)
    this.abrirRegistro(nuevoRegistro);


  }

  abrirRegistro(registro:Registro)
  {
    this.navCtrl.navigateForward('/tabs/tab2');
    switch(registro.type){

      case 'http':

        // Tarea 2: Abrir el registro desde el navegador nativo
      break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.content}`);
        
        //Abrir el mapa
      break;
    }
  }
}
