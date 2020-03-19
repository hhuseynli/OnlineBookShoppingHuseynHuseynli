import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageBean } from '../model/imageBean';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  image:string;
  constructor(private http:HttpClient) { }

  uploadImage(file:FormData){
    return this.http.post<ImageBean>(`${API_URL}/fileupload`, file);
  }


}
