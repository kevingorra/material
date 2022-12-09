import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';







/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [
    {usuario: "pKevin", nombre: 'andreuan', apellido: "Gomez", sexo: 'f'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'kevin', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'pablo', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'santiago', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'rodolfo', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "lele", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "migel", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "pepe", nombre: 'juan', apellido: "perez", sexo: 'f'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
    {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  
  
  ];
  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'Sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
