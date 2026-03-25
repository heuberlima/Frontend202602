import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Marca } from '../model/marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url = "http://localhost:8080/cmarca/marca";

  constructor(private http: HttpClient) { }

    //Consumir o serviço de marca para listar as marcas
    listarMarcas(): Observable<Marca[]> {
      return this.http.get<Marca[]>(`${this.url}`);
    }

    

}
