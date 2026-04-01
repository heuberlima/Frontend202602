import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../../model/marca';
import { MarcaService } from '../../service/marca.service';


@Component({
  selector: 'app-listar-marca',
  standalone: false,
  templateUrl: './listar-marca.component.html',
  styleUrl: './listar-marca.component.css'
})
export class ListarMarcaComponent implements OnInit {

  marcas!: Marca[];
  
  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void {
      this.listarMarcas();
  }

  listarMarcas() {
    //Executará o metodo listarMarcas() do service e atribuirá o resultado à variável marcas
    this.marcaService.listarMarcas().subscribe(data =>{
      this.marcas = data;
    });
  }

}
