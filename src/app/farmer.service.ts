import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from './farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  private baseUrl='http://localhost:8080/farmers';
  private Url='http://localhost:8080/farmers/register'
  private uUrl='http://localhost:8080/farmers/update'
  private dUrl='http://localhost:8080/farmers/delete'

  constructor(private httpClient: HttpClient) { }

  getFarmersList():Observable<Farmer[]>{
    return this.httpClient.get<Farmer[]>(`${this.baseUrl}`);
  }

  createFarmer(farmer:Farmer):Observable<Farmer>{
    return this.httpClient.post<Farmer>(`${this.Url}`,farmer);
  }

  getFarmerById(id: number): Observable<Farmer>{
    return this.httpClient.get<Farmer>(`${this.baseUrl}/${id}`);
  }

  updateFarmer(id: number, farmer: Farmer): Observable<Object>{
    return this.httpClient.put(`${this.uUrl}/${id}`, farmer);
  }

  deleteFarmer(id:number): Observable<Farmer>{

    //return this.http.delete<Employee>(`http://localhost:8080/employee/{eid}`);  

    return this.httpClient.delete<Farmer>(`${this.dUrl}/${id}`);

  }

 }
