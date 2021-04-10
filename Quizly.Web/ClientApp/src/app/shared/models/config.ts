import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Config{
    public readonly baseUrl:string = "http://localhost:65189/api";
}