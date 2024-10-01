import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../classes/empresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'https://localhost:7135/api/Empresa'

  constructor(private http: HttpClient) { }

  cadastrar(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(`${this.apiUrl}/Adicionar`, empresa);
  }

  listar(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/ListarEmpresas`);
  }

  listarAtivos(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/ListarAtivos`);
  }

  listarInativos(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/ListarInativos`);
  }
}
