import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Minerals } from '../modeles/minerals';

@Injectable({
  providedIn: 'root',
})
export class MineralDataService {
  getMinerals(name: string, luster: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient: HttpClient) {}

  baseUrl: String = '/api/minerals';

  fetchAllMinerals(): Observable<Minerals[]> {
    return this._httpClient.get<Minerals[]>(`${this.baseUrl}`);
  }

  getFilteredMinerals(name?: string, luster?: string): Observable<Minerals[]> {
    let params = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }
    if (luster) {
      params = params.set('luster', luster);
    }
    console.log('HTTP Params:', params.toString()); // Vérifiez les paramètres

    return this._httpClient.get<Minerals[]>(`${this.baseUrl}`, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching minerals:', error);
        return throwError(error); // Propager l'erreur
      })
    );
  }

  CreateMineral(data: Minerals) {
    return this._httpClient.post<Minerals>(`${this.baseUrl}`, data);
  }

  UpdateMineral(data: Minerals) {
    return this._httpClient.put<Minerals>(
      `${this.baseUrl}/${data.mineralid}`,
      data
    );
  }

  DeleteMineral(mineralid: Number) {
    return this._httpClient.delete<Minerals>(`${this.baseUrl}/${mineralid}`);
  }
}
