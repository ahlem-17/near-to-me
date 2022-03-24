import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Location {
  latitude: number;
  longitude: number;
  country_name: string;
  country_calling_code: number;
  city: string;
  ip: 0;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get<Location>("https://ipapi.co/json/");
  }
}
