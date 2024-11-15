import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio para gestionar las operaciones relacionadas con usuarios.
 * Este servicio permite consumir la API de usuarios para obtener información.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users'; // URL de la API de usuarios

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de usuarios desde la API.
   * @returns Observable que emite un arreglo de usuarios.
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
