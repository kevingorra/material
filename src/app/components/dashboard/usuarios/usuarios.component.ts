import { Component, ViewChild,AfterViewInit,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';








/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit, OnInit {

  lisUsuarios:Usuario[]=[]

  Columns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource!: MatTableDataSource<any>;
  clickedRows = new Set<Usuario>();
  



  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 


  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.lisUsuarios=this._usuarioService.getUsuario();
    this.dataSource= new  MatTableDataSource(this.lisUsuarios)
  }
  eliminarusuario(index:number){
    console.log(index)

    this._usuarioService.eliminarusuario(index);
    this.cargarUsuario();
    this._snackBar.open('El usuario fue eliminado con Exito','',{
      duration:1000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })

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
