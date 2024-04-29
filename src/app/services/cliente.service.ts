import { Injectable } from '@angular/core';
import { Cliente } from '../components/interfaces/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientesUrl ="http://localhost:3000/clientes";
  constructor(private http: HttpClient) {}
  clientes: Cliente[] = [
    
  ];
  listar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.clientesUrl) as Observable<Cliente[]>
    
  };
  remover(id:string){
    const cliente = this.http.get(this.clientesUrl+"/"+id)
    if(cliente){
      this.http.delete(this.clientesUrl+"/"+id,)
    }
  }
  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
