import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class Config{
    public readonly baseUrl:string = "https://localhost:44395/api";
}