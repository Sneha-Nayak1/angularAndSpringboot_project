import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8086/api/products';

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${this.baseUrl}`);
  }
  postProduct(data: any)
{
  return this.http.post<any>(`${this.baseUrl}`,data);
}
putProduct(data:any,id:number){
  return this.http.post<any>(`${this.baseUrl}/${id}`, data);
}

deleteProduct(id:any){
  console.log('Deleting product with id in service:', id);
    return this.http.get(`${this.baseUrl}/${id}`);
}
}

  