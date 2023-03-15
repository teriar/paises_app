import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl:string = 'https://restcountries.com/v3.1';


  constructor(private http:HttpClient) { }

  
  buscarApi(termino:string, tipo:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/${tipo}/${termino}`;
    
    return this.http.get<Country[]>(url);
  }
  
  buscarPais(termino:string):Observable<Country[]>{

  const url = `${this.apiUrl}/alpha/${termino}`;
    
      return this.http.get<Country[]>(url);
  }





  } 

